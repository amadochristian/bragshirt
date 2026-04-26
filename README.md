# BragShirt — E-commerce de Camisetas da Seleção Brasileira

Template de e-commerce mobile-first: HTML + CSS + JS puro, Supabase, Mercado Pago.

---

## Estrutura do Projeto

```
bragshirt/
├── index.html              # Página inicial
├── css/
│   └── global.css          # Design system completo
├── js/
│   ├── config.js           # ⚙️ EDITE AQUI — cores, nome, chaves Supabase
│   ├── supabase.js         # Auth, pedidos, cupons, dashboard
│   ├── carrinho.js         # Lógica do carrinho (localStorage)
│   └── produtos.js         # Catálogo de produtos (dados mock)
├── pages/
│   ├── login.html          # Login + Cadastro
│   ├── produtos.html       # Listagem com filtros
│   ├── produto.html        # Página do produto com variações
│   ├── carrinho.html       # Carrinho
│   ├── checkout.html       # Checkout com frete e pagamento
│   ├── pedido-confirmado.html
│   ├── minha-conta.html    # Área do cliente (pedidos, perfil)
│   ├── sobre.html
│   ├── contato.html
│   ├── politica-privacidade.html
│   ├── termos-uso.html
│   └── lgpd.html
├── admin/
│   └── index.html          # Painel admin (dashboard, pedidos, cupons)
├── assets/                 # Coloque aqui: logo.png, favicon.ico, og-image.jpg
├── supabase-schema.sql     # Execute este SQL no Supabase para criar as tabelas
├── .env.example            # Referência das variáveis de ambiente (para o servidor)
└── .gitignore
```

---

## Como configurar

### 1. Supabase (banco de dados + autenticação)

1. Crie uma conta em https://supabase.com e crie um projeto
2. Vá em **SQL Editor** e execute o arquivo `supabase-schema.sql`
3. Vá em **Authentication → Providers** e ative **Email**
4. Vá em **Settings → API** e copie:
   - **Project URL** → cole em `js/config.js` no campo `supabaseUrl`
   - **anon public** → cole em `js/config.js` no campo `supabaseAnonKey`

### 2. Personalizar a loja

Abra `js/config.js` e edite:

```js
export const CONFIG = {
  nomeLoja:        "BragShirt",          // Nome da loja
  corPrimaria:     "#0D47A1",            // Cor principal
  corSecundaria:   "#FFDF00",            // Cor de destaque
  supabaseUrl:     "https://xxx.supabase.co",
  supabaseAnonKey: "eyJ...",
  adminEmails:     ["seu@email.com"],    // Quem acessa o admin
  whatsapp:        "5511999999999",
}
```

### 3. Push no GitHub

```bash
git init
git add .
git commit -m "primeiro commit"
git remote add origin https://github.com/seu-usuario/bragshirt.git
git push -u origin main
```

### 4. Deploy na Vercel

1. Acesse https://vercel.com → **Add New Project**
2. Importe o repositório do GitHub
3. Clique em **Deploy** — pronto! (a Vercel detecta HTML estático automaticamente)
4. Após o deploy, copie a URL gerada e cole em `js/config.js` no campo `urlSite`

### 5. Variáveis de ambiente na Vercel (para APIs de pagamento/frete/email)

Na Vercel: **Settings → Environment Variables** — adicione:

| Variável | Onde encontrar |
|---|---|
| `MP_ACCESS_TOKEN` | mercadopago.com.br → Developers → Credenciais |
| `MELHOR_ENVIO_TOKEN` | melhorenvio.com.br → Minha Conta → Tokens |
| `RESEND_API_KEY` | resend.com → API Keys |
| `SUPABASE_SERVICE_KEY` | supabase.com → Settings → API → service_role |

> As APIs de pagamento e frete precisam dessas variáveis para funcionar.
> O site abre normalmente sem elas — só o checkout não vai processar.

---

## Sobre as chaves do Supabase

| Chave | Onde fica | Segurança |
|---|---|---|
| `supabaseUrl` | `js/config.js` (commitado) | ✅ Pública — ok |
| `supabaseAnonKey` | `js/config.js` (commitado) | ✅ Pública — ok, o Supabase protege via RLS |
| `supabase service_role` | Variável de ambiente Vercel | ❌ NUNCA no frontend |

**Por que a anon key pode ficar no frontend?**
O Supabase usa Row Level Security (RLS): cada usuário só acessa os próprios dados, mesmo com a chave pública. A chave de serviço (`service_role`) bypassa o RLS — por isso fica só no servidor.

---

## Banco de Dados

Execute `supabase-schema.sql` no Supabase SQL Editor. Ele cria:

| Tabela | O que armazena |
|---|---|
| `perfis` | Dados dos usuários (nome, telefone, endereço) |
| `pedidos` | Pedidos com status, itens, frete, total |
| `logs_pedidos` | Histórico de cada pedido (linha do tempo) |
| `cupons` | Códigos de desconto |

---

## Painel Admin

Acesse: `seusite.com/admin`

- Somente e-mails em `CONFIG.adminEmails` conseguem entrar
- Dashboard com KPIs: vendas, pedidos, ticket médio, clientes
- Gerenciar pedidos: ver detalhes, alterar status, código de rastreio
- Botão para gerar mensagem de WhatsApp para o cliente
- Criar e desativar cupons

---

## Reutilizar para outra marca

Edite **apenas** `js/config.js` — cores, nome, chaves. O tema propaga automaticamente para todas as páginas via CSS Variables.
