# Cara Core Informática — Loja Central de Downloads (AGENTS.md)

> **Destinado a:** Todas as IAs, assistentes de código e agentes autônomos (Antigravity, Cursor, Copilot, Claude Code, Gemini).  
> **Workspace Raiz Local:** `D:\onedrive\dev\caracore-loja`  
> **Repositório Remoto:** `https://github.com/chmulato/caracore-loja.git` (branch principal: `master`)  
> **Subdomínio Oficial:** `https://download.caracore.com.br`  
> **Página executiva:** `docs/index.html` (entrada da central)  
> **Catálogo técnico:** `docs/download.html`  
> **Mapa e roadmap:** `docs/mapa.html` e `docs/roadmap.html`  
> **CNPJ:** 23.969.028/0001-37 — Cara Core Informática  
> **Regra Mestre:** Seguir sempre o `AGENTS.md` global do ecossistema em `D:\onedrive\dev\AGENTS.md`.

---

## 1. Missão e Filosofia do Portal

Este repositório hospeda a **Central Unificada de Downloads** do ecossistema Cara Core Informática, sob a filosofia do **Bunker Digital**:
- **Offline-First & Soberania de Dados:** Distribuição direta de binários com persistência local (SQLite/arquivos).
- **Transparência Radical:** O catálogo usa os selos Estável, Pré-release, Piloto, Em breve e Acesso online (SaaS); exibe versões e checksums SHA256 publicados. Um piloto público não homologado deve ser claramente identificado como avaliação e não pronto para produção.
- **Branch Principal:** Sempre `master` tanto local quanto remotamente.

---

## 2. Mapa Canônico de Produtos e Downloads

| Produto | Canal / Versão | Status | Plataformas & Hashes | Loja do Produto |
|---|---|---|---|---|
| **PDV (Java)** | `v3.2.12-free` estável (atualização corretiva da linha 3.2.x; manutenção até 08/11/2026); pré-release publicada `v4.0.0-rc6` | Estável + Pré-release | Java Free: Windows/Linux/macOS ZIPs; RC6: Windows ZIP | https://pdv.caracore.com.br |
| **PDV (Rust)** | `v0.1.4` | Piloto | Windows ZIP | https://pdv-rust.caracore.com.br |
| **CSO Gestão de Frotas** | Web SaaS | Acesso online (SaaS) | Acesso pelo navegador; sem instalador | https://cso-transp.caracore.com.br |
| **CSO Transportes** | Desktop Bunker | Em breve (GA planejado 08/11/2028) | Sem download público | https://cso-transp.caracore.com.br |
| **CaraCore Hub** | `v2.1.0-rc1.2` pré-release; GA planejado para 06/04/2027 | Pré-release | Windows x64: instalador NSIS e ZIP, sem assinatura; SHA256 publicado | https://hub.caracore.com.br |
| **Ink Agenda** | `v2.0.1` (07/10/2026; v2.0.0 no histórico) | Estável | Windows ZIP e instalador; Java 25 + JavaFX; SHA256 ZIP `3118eac8…4ff3` · setup `49bdd76a…0a6b`. Desktop com suporte até a 3.0 em PWA (não antes de 2028; sem card de download até o GA) | https://ink.caracore.com.br |
| **Minerador ETE 4.0** | `v1.2.3` | Estável | Windows, Linux, macOS | https://ete.caracore.com.br |
| **Reino OIDC** | `v2.0.2-free` | Edição Free | Windows EXE `ReinoOIDC-2.0.2-free.exe` · SHA256 `d5c6121e921dedab678b056129653870ebb6fbfa28a75b12074f3d4fbc131bcc` · três Eras gratuitas para estudo pessoal, sem certificado digital; a edição paga está em desenvolvimento e a loja não combina PIX nesta etapa; dúvidas e relatos são bem-vindos, sem SLA; sem certificação nem consultoria. A página de download oferece só `v2.0.2-free`. `v2.0.1-free` e `v2.0.0` ficam no histórico | https://oidc.caracore.com.br |
| **Circuito Ferradura** | `v2.0.24` | Estável | Windows EXE sem assinatura · SHA256 `eca7027c08d062f1fcbfb529092db53e5f30a3766d286ec448089c2f8734aa12` · pacotes Windows, macOS e HTML na loja · `v2.0.23` no histórico | https://circuito.caracore.com.br |
| **BioReator 4.0** | Community `1.1.1` publicada em 13/10/2026; Premium em 18/06/2027, sem preço e sem PIX | Estável | Windows x64, sem assinatura. MSI SHA256 `6eb0dd01006304d78c74f185345711bc8d4e135b03443d2ab583379338b04b21` · ZIP `b36d18a0fae828f359db3c2a6509ad519849e560487d0ebbfaa3c3c85e09e1d7` · EXE dentro do ZIP `88eb22c17b547ded71aed275021bfbbd4121b171cbaba4373dfdca96c11a609a` | https://ru.caracore.com.br |
| **Cara Core Seed** | `0.1.5` pré-release candidata; `0.1.4` release estável anterior | Piloto público para avaliação; homologação independente pendente | Windows x64 · EXE unsigned, 216.466.586 bytes · SHA-256 `e449ca2cee74fda135ac098d2333fe674c2c476773a7d4adb60bc016a767db16`; API protegida; documentação local sem CDN; Linux fora desta etapa | https://seed.caracore.com.br |

---

## 3. Diretrizes Técnicas

- **Validação da 3.2.12:** 19/19 testes focados em Java 25/H2 aprovados; CRC/estrutura dos três ZIPs e hashes dos cinco assets remotos conferidos. Suíte completa, smoke portátil SQLite/health/navegador, execução Linux/macOS e homologação operacional completa pendentes. Publicação estável/Latest autorizada explicitamente em 15/10/2026; não significa homologação completa. Fonte `hotfix/3.2.12-free` `72ace488aed4ee91001c60cf40a3934ddfe8faf1`.

- **Página de Entrada:** `docs/index.html` apresenta o ecossistema para quem decide. `docs/download.html` permanece o catálogo técnico, com maturidade, caso de uso, versão e SHA256 antes do arquivo.
- **Mapa:** `docs/mapa.html` organiza a casa por problema de negócio. Cada produto tem acesso e banco próprios.
- **Roadmap:** `docs/roadmap.html` usa as datas públicas da casa. Sem arquivo para o que ainda não tem release.
- **Compatibilidade GitHub Pages:** Suporte tanto para publicação na raiz (`/`) quanto em (`/docs`).
- **CNAME:** `download.caracore.com.br` no arquivo `CNAME` e `docs/CNAME`.
- **Integridade:** Não inventar versões, integrações PIX no Free Java ou depoimentos fictícios.
- **PDV — estado 15/10/2026:** Free `v3.2.12-free` é uma atualização corretiva da linha 3.2.x, estável/Latest e em manutenção restrita até 08/11/2026. Não desenvolver recursos na linha 3.2.x. A v4 segue pelo ciclo de RCs; a RC6 é pré-release pública para avaliação (Windows), e RC7 continua em QA local, sem download. GA somente após gates e aceites formais, sem data automática em 08/11. Retomada operacional: `caracore-pdv/docs/arquitetura/CONTINUIDADE_DESENVOLVIMENTO.md` e `docs/relatorio-rc7.md` na oficina.
- **Hub:** o cartão vigente é a pré-release Windows `v2.1.0-rc1.2`. O banco do produto é SQLite local (WAL). A release seguinte entra com outra tag e os SHA-256 dessa tag, no mesmo corte da loja `hub.caracore.com.br` e da matriz. A vitrine descreve a aplicação web 2.1 sobre Tomcat embutido no instalador, com SQLite local; `WAR` e "oficina" não entram no texto público (alinhamento de 20/10/2026, commit `d5295f0`).
- **Seed:** o cartão no catálogo aponta para a pré-release candidata Windows `0.1.5`, com SHA-256 publicado, e mantém a `0.1.4` como release estável anterior. É um piloto público para avaliação, ainda não homologado nem pronto para produção; homologação independente permanece pendente. A API administrativa exige sessão ADMIN/CSRF e as rotas de integração usam token por licença; Host é validado globalmente, o horário de heartbeat usa UTC do servidor e a documentação OpenAPI funciona localmente sem CDN. Ao atualizar, preservar banco e chaves; os bancos 0.1.3/0.1.4 e assinaturas antigas continuam compatíveis. O Seed integra o ecossistema como ferramenta local complementar de gestão de clientes e licenças; cada produto mantém seu aplicativo e banco. Sem monitoramento remoto de sinais periódicos; Linux fica fora desta etapa; primeiro acesso `admin`/`admin`, nova senha de 12 a 128 caracteres com confirmação e chave de recuperação. O piloto não exige convite.
