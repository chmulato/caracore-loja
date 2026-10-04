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
- **Transparência Radical:** O catálogo usa os selos Estável, Pré-release, Piloto, Em breve e Acesso online (SaaS); exibe versões e checksums SHA256 publicados. Ferramentas internas sem oferta pública ficam fora do catálogo.
- **Branch Principal:** Sempre `master` tanto local quanto remotamente.

---

## 2. Mapa Canônico de Produtos e Downloads

| Produto | Canal / Versão | Status | Plataformas & Hashes | Loja do Produto |
|---|---|---|---|---|
| **PDV (Java)** | `v3.2.6-free` estável; `v4.0.0-rc4` pré-release | Estável + Pré-release | Java Free: Windows/Linux/macOS ZIPs; RC4: Windows ZIP | https://pdv.caracore.com.br |
| **PDV (Rust)** | `v0.1.4` | Piloto | Windows ZIP | https://pdv-rust.caracore.com.br |
| **CSO Gestão de Frotas** | Web SaaS | Acesso online (SaaS) | Acesso pelo navegador; sem instalador | https://cso-transp.caracore.com.br |
| **CSO Transportes** | Desktop Bunker | Em breve (GA planejado 08/11/2028) | Sem download público | https://cso-transp.caracore.com.br |
| **CaraCore Hub** | Disponibilização planejada para 06/04/2027 | Em breve | Sem versão pública | https://hub.caracore.com.br |
| **Ink Agenda** | `v2.0.0` | Estável | Windows ZIP e instalador; Java 25 + JavaFX | https://ink.caracore.com.br |
| **Minerador ETE 4.0** | `v1.2.3` | Estável | Windows, Linux, macOS | https://ete.caracore.com.br |
| **Reino OIDC** | `v2.0.0-RC1` | Pré-release | Windows EXE | https://oidc.caracore.com.br |
| **Circuito Ferradura** | `v2.0.0` | Estável | Windows EXE | https://circuito.caracore.com.br |
| **Cara Core Seed** | Uso Interno | Fora do catálogo público | Sem download aberto | https://seed.caracore.com.br |

---

## 3. Diretrizes Técnicas

- **Página de Entrada:** `download.html` (com espelhamento em `docs/download.html`).
- **Compatibilidade GitHub Pages:** Suporte tanto para publicação na raiz (`/`) quanto em (`/docs`).
- **CNAME:** `download.caracore.com.br` no arquivo `CNAME` e `docs/CNAME`.
- **Integridade:** Não inventar versões, integrações PIX no Free Java ou depoimentos fictícios.
