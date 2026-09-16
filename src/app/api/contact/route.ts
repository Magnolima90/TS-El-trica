import { NextResponse } from 'next/server';
import { siteUrl } from '../../../data/company';

type ContactPayload = {
  nome?: string;
  telefone?: string;
  email?: string;
  servico?: string;
  mensagem?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Corpo da requisição inválido.' }, { status: 400 });
  }

  const nome = payload.nome?.trim() ?? '';
  const telefone = payload.telefone?.trim() ?? '';

  if (!nome || !telefone) {
    return NextResponse.json({ error: 'Nome e telefone são obrigatórios.' }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    // Sem webhook configurado ainda: o formulário continua funcionando
    // via WhatsApp no cliente, então isso não é um erro fatal.
    return NextResponse.json({ error: 'Webhook não configurado.' }, { status: 501 });
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // alguns provedores de webhook (ex.: FormSubmit) exigem esses cabeçalhos
        // para confirmar que a origem é o próprio site
        Origin: siteUrl,
        Referer: `${siteUrl}/`,
      },
      body: JSON.stringify({
        nome,
        telefone,
        email: payload.email?.trim() ?? '',
        servico: payload.servico?.trim() ?? '',
        mensagem: payload.mensagem?.trim() ?? '',
        origem: siteUrl,
        enviadoEm: new Date().toISOString(),
      }),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: 'Webhook recusou a requisição.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Falha ao contatar o webhook.' }, { status: 502 });
  }
}
