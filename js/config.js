// ============================================================
// ⚙️  CONFIG.JS — EDITE AQUI PARA PERSONALIZAR SUA LOJA
// ============================================================
//
// 🔑 SOBRE AS CHAVES DO SUPABASE:
//   - supabaseUrl e supabaseAnonKey são chaves PÚBLICAS — ficam aqui mesmo
//   - Encontre em: supabase.com → seu projeto → Settings → API
//   - Copie "Project URL" e "anon public"
//
// 🔑 CHAVES SECRETAS (Mercado Pago, Melhor Envio, Resend):
//   - Estas NUNCA ficam no frontend
//   - Ficam nas variáveis de ambiente da Vercel:
//     vercel.com → seu projeto → Settings → Environment Variables
//   - Não precisam estar neste arquivo
//
// ✅ ESTE ARQUIVO É COMMITADO NO GIT — só contém chaves públicas
// ============================================================

export const CONFIG = {

  // ——— 🏷️ IDENTIDADE ———————————————————————————————————————
  nomeLoja:  "BragShirt",
  tagline:   "Veste a Garra, Vive a Copa",
  descricao: "Camisetas da Seleção Brasileira com qualidade premium.",

  // ——— 🎨 CORES (edite para mudar o tema inteiro) ——————————
  corPrimaria:   "#0D47A1",   // Azul
  corSecundaria: "#FFDF00",   // Amarelo
  corAcento:     "#009C3B",   // Verde
  corFundo:      "#0a0a0f",
  corTexto:      "#f0f0f0",

  // ——— 🗄️ SUPABASE ————————————————————————————————————————
  // 1. Acesse: https://supabase.com → seu projeto
  // 2. Vá em: Settings → API
  // 3. Copie "Project URL" abaixo:
  supabaseUrl: "https://emtbkpwdhzjvewokujie.supabase.co",
  // 4. Copie "anon public" abaixo:
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtdGJrcHdkaHpqdmV3b2t1amllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5ODEwNzIsImV4cCI6MjA5MjU1NzA3Mn0.RgF9-ZC8tudyX6bMKsnKBesNw5R-BX0hG0NIFl6kuSE",

  // ——— 🔐 ADMINS — e-mails com acesso ao painel ————————————
  adminEmails: [
    "christian.amado97@gmail.com",   // ← troque pelo seu e-mail
  ],

  // ——— 📞 CONTATO ——————————————————————————————————————————
  whatsapp: "5511999999999",        // só números com DDI (55)
  email:    "contato@bragshirt.com",

  // ——— 🌐 URL DO SITE ——————————————————————————————————————
  // Após o deploy, cole a URL da Vercel aqui e commite de novo
  urlSite: "https://bragshirt.vercel.app",

  // ——— 💰 LOJA —————————————————————————————————————————————
  freteGratisAcima: 299.90,
  moedaSymbol: "R$",
  maxParcelas: 12,

  // ——— 📱 REDES SOCIAIS ————————————————————————————————————
  instagram: "https://instagram.com/bragshirt",
  facebook:  "",
};

// ============================================================
// Aplica as cores como CSS Variables — não precisa editar aqui
// ============================================================
export function aplicarTema() {
  const r = document.documentElement;
  r.style.setProperty("--cor-primaria",   CONFIG.corPrimaria);
  r.style.setProperty("--cor-secundaria", CONFIG.corSecundaria);
  r.style.setProperty("--cor-acento",     CONFIG.corAcento);
  r.style.setProperty("--cor-fundo",      CONFIG.corFundo);
  r.style.setProperty("--cor-texto",      CONFIG.corTexto);
}

// ============================================================
// Helpers de formatação — use em qualquer página
// ============================================================
export const formatarMoeda = (v) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

export const formatarData = (d) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  }).format(new Date(d));
