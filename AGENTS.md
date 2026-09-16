# Cara Core Informática — Loja Central de Downloads (AGENTS.md)

> **Destinado a:** Todas as IAs, assistentes de código e agentes autônomos (Antigravity, Cursor, Copilot, Claude Code, Gemini).  
> **Workspace Raiz Local:** `D:\onedrive\dev\caracore-loja`  
> **Repositório Remoto:** `https://github.com/chmulato/caracore-loja.git` (branch principal: `master`)  
> **Subdomínio Oficial:** `https://download.caracore.com.br`  
> **Página Principal da Loja:** `download.html` (e `docs/download.html`)  
> **CNPJ:** 23.969.028/0001-37 — Cara Core Informática  
> **Regra Mestre:** Seguir sempre o `AGENTS.md` global do ecossistema em `D:\onedrive\dev\AGENTS.md`.

---

## 1. Missão e Filosofia do Portal

Este repositório hospeda a **Central Unificada de Downloads** do ecossistema Cara Core Informática, sob a filosofia do **Bunker Digital**:
- **Offline-First & Soberania de Dados:** Distribuição direta de binários com persistência local (SQLite/arquivos).
- **Transparência Radical:** Cada produto exibe seu status honesto (Disponível Free, Piloto, Web/SaaS, Garagem ou Roadmap), suas limitações objetivas e seus checksums SHA256 oficiais.
- **Branch Principal:** Sempre `master` tanto local quanto remotamente.

---

## 2. Mapa Canônico de Produtos e Downloads

| Produto | Canal / Versão | Status | Plataformas & Hashes | Loja do Produto |
|---|---|---|---|---|
| **PDV Desktop (Java)** | `v3.2.6-free` | Disponível Free (100 vendas/mês, 1 operador, UI navegador localhost:8080/login) | Windows x64 ZIP (`4b15a12d...`)<br>Linux x64 ZIP (`028e5987...`)<br>macOS x64 ZIP (`7e617aebe...`) | https://pdv.caracore.com.br |
| **PDV (Rust)** | `v0.1.4` | Piloto Ativo (100 vendas na vida do piloto, Tauri 2 + React + SQLite) | Windows ZIP (`7d9cf698...`), NSIS, MSI | https://pdv-rust.caracore.com.br |
| **CSO Gestão de Frotas** | Web SaaS | Em produção | Acesso direto via navegador (`https://cso.caracore.com.br/`) | https://cso-transp.caracore.com.br |
| **CSO Transportes** | Desktop Bunker | Garagem (GA 08/11/2028) | Quarkus + JavaFX + SQLite (sem instalador público até 2028) | https://cso-transp.caracore.com.br |
| **CaraCore Hub** | Web 2.1 | Vitrine Ativa (GA Instalador Windows SQLite: 06/04/2027) | Gestão de encomendas CD Shopee/Mercado Livre/Temu | https://hub.caracore.com.br |
| **Ink Agenda** | `v2.0.0` | Estável Windows | Java 25 + JavaFX Bunker Offline | https://ink.caracore.com.br |
| **Minerador ETE 4.0** | `v1.2.3` | Ouro 4.0 | Windows, Linux, macOS | https://ete.caracore.com.br |
| **Reino OIDC** | `v2.0.0-RC1` | RC Ativo | Provedor OAuth 2.1 / OIDC | https://oidc.caracore.com.br |
| **Circuito Ferradura** | Educacional | Ativo | Lógica e Educação | https://circuito.caracore.com.br |
| **Cara Core Seed** | Uso Interno | Sem Download Aberto | Ferramenta interna de infra | https://seed.caracore.com.br |

---

## 3. Diretrizes Técnicas

- **Página de Entrada:** `download.html` (com espelhamento em `docs/download.html`).
- **Compatibilidade GitHub Pages:** Suporte tanto para publicação na raiz (`/`) quanto em (`/docs`).
- **CNAME:** `download.caracore.com.br` no arquivo `CNAME` e `docs/CNAME`.
- **Integridade:** Não inventar versões, integrações PIX no Free Java ou depoimentos fictícios.
