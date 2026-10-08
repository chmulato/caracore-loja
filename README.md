# Cara Core Informática — Loja Central de Downloads

Repositório da **Loja Central e Hub de Downloads do Ecossistema Cara Core Informática**.

- **URL Oficial:** [https://download.caracore.com.br](https://download.caracore.com.br)
- **Página Principal:** `download.html` (com `index.html` para redirecionamento canônico)
- **Repositório Git:** `https://github.com/chmulato/caracore-loja.git`
- **Branch Principal:** `master` (local e remoto)
- **CNPJ:** 23.969.028/0001-37 — Cara Core Informática

---

## 🚀 Objetivo

Manter um catálogo transparente de downloads publicados, acessos online e itens em roadmap da Cara Core Informática. Cada download listado exibe sua versão, estado e SHA256 publicado; produtos sem versão pública não são apresentados como disponíveis para baixar.

## 📦 Aplicações em Destaque

1. **CaraCore PDV (Java):** `v3.2.7-free` estável, multiplataforma; `v4.0.0-rc5` pré-release para Windows.
2. **CaraCore PDV (Rust):** `v0.1.4` piloto Windows (ZIP).
3. **CaraCore CSO Frotas:** Gestão de frotas com acesso online (SaaS); sem download.
4. **CaraCore CSO Transportes:** Em breve; GA planejado para 08/11/2028; sem download público.
5. **CaraCore Hub:** `v2.1.0-rc1.2` pré-release Windows x64, instalador NSIS e ZIP, sem assinatura; GA planejado para 06/04/2027.
6. **Ink Agenda:** `v2.0.1` estável para Windows (ZIP e instalador).
7. **Minerador ETE 4.0:** `v1.2.3` estável para Windows, Linux e macOS.
8. **Reino OIDC:** `v2.0.1-free` para Windows. As três Eras são gratuitas para estudo pessoal, sem chave de ativação e sem certificado digital. A edição paga está em desenvolvimento; a loja não combina PIX nesta etapa. Dúvidas e relatos são bem-vindos, sem SLA. Sem certificação nem consultoria. A página de download oferece só `v2.0.1-free`. `v2.0.0` fica no histórico.
9. **Circuito Ferradura:** `v2.0.23` na loja e na release. Executável Windows sem assinatura digital; pacotes Windows, macOS e HTML offline. SHA256 do EXE `12df7a9d7d0984f78612b710418d0c76686796e011748001278a399d2ce9e68d`. `v2.0.0` fica no histórico.

## 🛠️ Publicação no GitHub Pages

- **Custom Domain:** `download.caracore.com.br` (definido no arquivo `CNAME` e `docs/CNAME`).
- **Apontamento DNS (Registro.br):** CNAME `download.caracore.com.br` → `chmulato.github.io`.
- **Branch:** `master` (servindo de `/` ou `/docs`).

---

## 🔒 Verificação de Integridade

Os downloads listados exibem os SHA256 publicados nas respectivas releases para conferência no terminal (PowerShell ou Bash).
