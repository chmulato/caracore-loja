# Cara Core Informática — Loja Central de Downloads

Repositório da **Loja Central e Hub de Downloads do Ecossistema Cara Core Informática**.

- **URL Oficial:** [https://download.caracore.com.br](https://download.caracore.com.br)
- **Página executiva:** `docs/index.html`
- **Catálogo técnico:** `docs/download.html`
- **Mapa e roadmap:** `docs/mapa.html` e `docs/roadmap.html`
- **Repositório Git:** `https://github.com/chmulato/caracore-loja.git`
- **Branch Principal:** `master` (local e remoto)
- **CNPJ:** 23.969.028/0001-37 — Cara Core Informática

---

## 🚀 Objetivo

Manter um catálogo transparente de downloads publicados, acessos online e itens em roadmap da Cara Core Informática. Cada download listado exibe sua versão, estado e SHA256 publicado; produtos sem versão pública não são apresentados como disponíveis para baixar.

## 📦 Aplicações em Destaque

1. **CaraCore PDV (Java):** `v3.2.7-free` estável, multiplataforma; `v4.0.0-rc6` é a pré-release Windows oferecida para download (build 11/10/2026, SHA-256 `0c00b24b33b3c365fd1f24ec173bfa4e35bedf1946b2df4151035250780d5325`). Requer Windows 10/11 x64 + Microsoft Edge; Java 25 incluído, sem instalar JDK/Python. A `v4.0.0-rc5` fica no histórico. RC7 somente em homologação local; GA em reavaliação, sem data nova.
2. **CaraCore PDV (Rust):** `v0.1.4` piloto Windows (ZIP).
3. **CaraCore CSO Frotas:** Gestão de frotas com acesso online (SaaS); sem download.
4. **CaraCore CSO Transportes:** Em breve; GA planejado para 08/11/2028; sem download público.
5. **CaraCore Hub:** `v2.1.0-rc1.2` pré-release Windows x64, instalador NSIS e ZIP, sem assinatura; GA planejado para 06/04/2027.
6. **Ink Agenda:** `v2.0.1` estável para Windows (ZIP e instalador).
7. **Minerador ETE 4.0:** `v1.2.3` estável para Windows, Linux e macOS.
8. **Reino OIDC:** `v2.0.2-free` para Windows. As três Eras são gratuitas para estudo pessoal, sem certificado digital. A edição paga está em desenvolvimento; a loja não combina PIX nesta etapa. Dúvidas e relatos são bem-vindos, sem SLA. Sem certificação nem consultoria. A página de download oferece só `v2.0.2-free`. `v2.0.1-free` e `v2.0.0` ficam no histórico.
9. **Circuito Ferradura:** `v2.0.24` na loja e na release. Executável Windows sem assinatura digital; pacotes Windows, macOS e HTML offline. SHA256 do EXE `eca7027c08d062f1fcbfb529092db53e5f30a3766d286ec448089c2f8734aa12`. `v2.0.23` fica no histórico.
10. **BioReator 4.0:** Community `1.1.0` publicada em 12/10/2026 para Windows x64, sem assinatura digital. MSI, ZIP e EXE dentro do ZIP. SHA256 do MSI `2bb046569776c3b1b55875c234205fe3c6ec20b1996f0c4dd4ae85749f5129ba` · ZIP `0b67407604245766d1e68b7e6ab14a6f0dcece839fd08d8992af7cc573bc9d3b` · EXE `13f2ba7161cbdb6842dc6a05657e25ae50cf3c7dbb544791fc4b6a6e910883b2`. A 1.1.0 acrescenta efeitos configurados de oxigênio, temperatura e pH, fase lag, decaimento celular, término automático por esgotamento do substrato e estimativa de UFC/mL. A Premium chega em 18/06/2027, sem preço e sem PIX. A vitrine é `https://ru.caracore.com.br`.

## 🛠️ Publicação no GitHub Pages

- **Custom Domain:** `download.caracore.com.br` (definido no arquivo `CNAME` e `docs/CNAME`).
- **Apontamento DNS (Registro.br):** CNAME `download.caracore.com.br` → `chmulato.github.io`.
- **Branch:** `master` (servindo de `/` ou `/docs`).

---

## 🔒 Verificação de Integridade

Os downloads listados exibem os SHA256 publicados nas respectivas releases para conferência no terminal (PowerShell ou Bash).
