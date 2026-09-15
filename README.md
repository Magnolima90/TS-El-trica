# TS Elétrica

Landing page profissional para a empresa TS Elétrica, voltada para engenharia elétrica, instalações, manutenção e soluções para residências, empresas e indústrias em Fortaleza, CE.

## Sobre o projeto

Este projeto foi desenvolvido em React + TypeScript + Next.js, com foco em:

- apresentação institucional da empresa, com renderização estática (SSG) para SEO técnico;
- conversão de leads via WhatsApp e formulário;
- SEO local para reforçar presença em buscas como "TS Elétrica" e "engenharia elétrica";
- design responsivo e moderno, mantendo a identidade profissional da marca.

## Tecnologias utilizadas

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `CONTACT_WEBHOOK_URL` | Não | URL (Zapier/Make/n8n/Google Apps Script etc.) para onde o formulário de orçamento envia os dados via POST. Sem essa variável, o endpoint `/api/contact` responde com erro gracioso e o formulário continua funcionando apenas pelo redirecionamento ao WhatsApp (comportamento atual). |

Para rodar localmente com o webhook ativo, crie um arquivo `.env.local` na raiz com:

```
CONTACT_WEBHOOK_URL=https://sua-automacao.exemplo.com/webhook
```

Em produção, configure a mesma variável em **Vercel → Project Settings → Environment Variables**.

## Como rodar localmente

1. Clone o projeto:

```bash
git clone https://github.com/Magnolima90/TS-El-trica.git
```

2. Acesse a pasta:

```bash
cd TS-El-trica
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse no navegador:

```bash
http://localhost:3000/
```

## Build de produção

```bash
npm run build
```

## Observações

- O site já inclui otimizações de SEO e metadata para busca local.
- O WhatsApp e o formulário estão preparados para conversão comercial.
- Os dados reais da empresa foram preservados conforme informado.

## Repositório

- GitHub: https://github.com/Magnolima90/TS-El-trica
