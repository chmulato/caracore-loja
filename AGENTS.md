# Cara Core Informática — Loja Central de Downloads (AGENTS.md)

> **Destinado a:** Todas as IAs, assistentes de código e agentes autônomos (Antigravity, Cursor, Copilot, Claude Code, Gemini).  
> **Workspace Raiz Local:** `D:\onedrive\dev\caracore-loja`  
> **Repositório Remoto:** `https://github.com/chmulato/caracore-loja.git` (branch principal: `master`)  
> **Subdomínio Oficial:** `https://download.caracore.com.br`  
> **Página executiva:** `docs/index.html` (entrada da central)  
> **Catálogo técnico:** `docs/download.html`  
> **Mapa e roadmap:** `docs/mapa.html` e `docs/roadmap.html`  
> **CNPJ:** 23.969.028/0001-37 — Cara Core Informática  
> **Regra Mestre:** Seguir sempre o `AGENTS.md` global do ecossistema em `caracore-site/AGENTS.md` + `caracore-site/docs/ECOSYSTEM_MEMORIA.md` (o antigo `D:\onedrive\dev\AGENTS.md` **não existe mais**).

---

## 1. Missão e Filosofia do Portal

Este repositório hospeda a **Central Unificada de Downloads** do ecossistema Cara Core Informática, sob a filosofia do **Bunker Digital**:
- **Offline-First & Soberania de Dados:** Distribuição direta de binários com persistência local (SQLite/arquivos).
- **Transparência Radical:** O catálogo usa os quatro selos canônicos da matriz — **Disponível**, **Beta (RC)**, **Piloto** e **Em desenvolvimento** —, com a mesma cor e o mesmo texto em todas as páginas. "Versão anterior" é estado do PDV, não selo; exibe versões e checksums SHA-256 publicados. **Selo é status, data é build** — não colar data em selo de status. Um piloto público não homologado deve ser claramente identificado como avaliação e não pronto para produção.
- **Branch Principal:** Sempre `master` tanto local quanto remotamente.

---

## 2. Mapa Canônico de Produtos e Downloads

**Produtos principais = quatro:** **PDV 4**, **Hub**, **CSO** e **Ink Agenda**. Só eles ocupam o bloco "Produtos principais" do catálogo, da página executiva, do mapa, do roadmap e do rodapé. Os demais itens do portfólio são **complementos**: existem, têm loja própria e aparecem com o status verdadeiro, mas não disputam headline, CTA nem a seção de núcleo. O PDV Rust é piloto da linha de caixa e também fica fora do bloco principal.

| Produto | Canal / Versão | Status | Plataformas & Hashes | Loja do Produto |
|---|---|---|---|---|
| **PDV 4** (principal) | `v4.0.0` lançada em 08/11/2026 (release 06/11/2026, tag `v4.0.0`, fonte `master` `be0f74b`) | Disponível | Windows 10/11 x64: ZIP portátil 176.613.179 B · SHA-256 `9557e0b16d77a85e0bb68971eb0e8710356977261337a8c1c05593e893d81eac` · `SHA256SUMS.txt` com duas assinaturas Ed25519 · Java 25 embutido · Edge necessário · T032 17/17 · matriz 11/11 (M11 não medido) · banco 3.2.12 9/9 · SCA OSV 06/11/2026 (NVD não medido) | https://pdv.caracore.com.br |
| **PDV (Java) 3.2.12** | `v3.2.12-free` — **versão anterior**, última da linha 3.2.x, com os pacotes ainda disponíveis; manutenção de transição encerrada em 08/11/2026 | Disponível (versão anterior) | Windows/Linux/macOS ZIPs; requer JDK 25 instalado | https://pdv.caracore.com.br |
| **PDV (Rust)** | `v0.1.4` — piloto da linha de caixa, complemento | Piloto | Windows ZIP | https://pdv-rust.caracore.com.br |
| **CSO Gestão de Frotas** (principal) | Web SaaS, em produção desde 06/10/2026 | Disponível (acesso online) | Acesso pelo navegador; sem instalador | https://cso-transp.caracore.com.br |
| **CSO Transportes** | Desktop Bunker | Em desenvolvimento (GA planejado para 08/11/2028) | Sem download público | https://cso-transp.caracore.com.br |
| **CaraCore Hub** (principal) | `v2.1.0-rc1.10` pré-release; aceite de QA pendente; GA planejado para 06/04/2027; produto Free | Beta (RC) | Windows x64: ZIP portátil, sem assinatura digital; SHA-256 publicado; suporte opcional com pagamento recorrente de R$ 79,90/mês a partir do GA | https://hub.caracore.com.br |
| **Ink Agenda** (principal) | `v2.2.1` publicada em 04/11/2026 (um executável, três perfis: Tatuagem & Arte Corporal, Odontologia & Saúde, Beleza & Estética; equipe com papéis e mensageria WhatsApp/Telegram); Desktop 2.3.0 planejado para 29/01/2027, conteúdo não publicado | Disponível | Windows ZIP e instalador, Linux `.deb`, unsigned; SHA-256 publicado (`4baf257d…` ZIP · `39eafa4a…` EXE · `1b89bb76…` DEB). Bases 2.0.1 a 2.2.0 abrem sem migração nova (esquema V26). macOS sem instalador: linha 3.0 em PWA, não antes de 2028. Java 25 + JavaFX embutidos | https://ink.caracore.com.br |
| **Minerador ETE 4.0** | `v1.2.3` | Disponível | Windows, Linux, macOS | https://ete.caracore.com.br |
| **Reino OIDC** | `v2.0.2-free` | Disponível (edição Free) | Windows EXE `ReinoOIDC-2.0.2-free.exe` · SHA-256 `d5c6121e921dedab678b056129653870ebb6fbfa28a75b12074f3d4fbc131bcc` · três Eras gratuitas para estudo pessoal, sem certificado digital; a edição paga está em desenvolvimento e a loja não combina PIX nesta etapa; dúvidas e relatos são bem-vindos, sem SLA; sem certificação nem consultoria. A página de download oferece só `v2.0.2-free`. `v2.0.1-free` e `v2.0.0` ficam no histórico | https://oidc.caracore.com.br |
| **Circuito Ferradura** | `v2.0.24` | Disponível | Windows EXE sem assinatura · SHA-256 `eca7027c08d062f1fcbfb529092db53e5f30a3766d286ec448089c2f8734aa12` · pacotes Windows, macOS e HTML na loja · `v2.0.23` no histórico | https://circuito.caracore.com.br |
| **A Rebeldia da Mecatrônica** | Livro publicado; app Universo Rebeldia em piloto, fora do catálogo | Disponível (acesso online) | Sem arquivo nesta central; leitura em `eng.caracore.com.br` | https://eng.caracore.com.br/ |
| **BioReator 4.0** | Community `1.1.1` publicada em 13/10/2026; Premium em 18/06/2027, sem preço e sem PIX | Disponível | Windows x64, sem assinatura. MSI SHA-256 `6eb0dd01006304d78c74f185345711bc8d4e135b03443d2ab583379338b04b21` · ZIP `b36d18a0fae828f359db3c2a6509ad519849e560487d0ebbfaa3c3c85e09e1d7` · EXE dentro do ZIP `88eb22c17b547ded71aed275021bfbbd4121b171cbaba4373dfdca96c11a609a` | https://ru.caracore.com.br |
| **Cara Core Seed** | `0.1.5` pré-release candidata; `0.1.4` release anterior | Piloto público para avaliação; homologação independente pendente | Windows x64 · EXE unsigned, 216.466.586 bytes · SHA-256 `e449ca2cee74fda135ac098d2333fe674c2c476773a7d4adb60bc016a767db16`; API protegida; documentação local sem CDN; Linux fora desta etapa | https://seed.caracore.com.br |
| **Helianto Condominium** | GA previsto para 30/12/2029; vitrine no ar | Em desenvolvimento | Sem arquivo nesta central | https://helianto.caracore.com.br/ |

---

## 3. Diretrizes Técnicas

- **Validação da 3.2.12:** 19/19 testes focados em Java 25/H2 aprovados; CRC/estrutura dos três ZIPs e hashes dos cinco assets remotos conferidos. Suíte completa, smoke portátil SQLite/health/navegador, execução Linux/macOS e homologação operacional completa pendentes. Publicação autorizada explicitamente em 15/10/2026; não significa homologação completa. Desde 29/10/2026 o PDV é apresentado como **versão anterior, ainda a indicada para operar**. Fonte `hotfix/3.2.12-free` `72ace488aed4ee91001c60cf40a3934ddfe8faf1`.

- **Página de Entrada:** `docs/index.html` apresenta o ecossistema para quem decide. `docs/download.html` permanece o catálogo técnico, com maturidade, caso de uso, versão e SHA-256 antes do arquivo.
- **Mapa:** `docs/mapa.html` organiza o ecossistema por problema de negócio. Cada produto tem acesso e banco próprios.
- **Roadmap:** `docs/roadmap.html` usa as datas públicas do ecossistema. Sem arquivo para o que ainda não tem release.
- **Compatibilidade GitHub Pages:** Suporte tanto para publicação na raiz (`/`) quanto em (`/docs`).
- **CNAME:** `download.caracore.com.br` no arquivo `CNAME` e `docs/CNAME`.
- **Integridade:** Não inventar versões, integrações PIX no Free Java ou depoimentos fictícios.
- **PDV — estado 09/11/2026:** a **v4.0.0 foi lançada em 08/11/2026** (release de 06/11/2026 em `chmulato/caracore-pdv4-releases`, tag `v4.0.0`, fonte `master` `be0f74b`, ZIP portátil Windows x64 de 176.613.179 B, SHA-256 `9557e0b1…d81eac`), e é a versão indicada para operar. Medido nesse pacote: T032 17/17, matriz 11/11 (M11 de performance **não medido**, PERF-001–007 congeladas), migração do banco 3.2.12 9/9 (047→052, sem volta) e sonda 20 aprovadas / 0 reprovadas / 1 não coberta / 0 bloqueadas; o SCA é OSV de 06/11/2026 (275 pacotes, 1 alto triado por byte) e o **NVD não foi medido** — nunca escrever "0 CVE". A `v3.2.12-free` é a **versão anterior**, última da linha 3.2.x, com os pacotes ainda disponíveis e a manutenção de transição encerrada em 08/11/2026; não desenvolver recursos na linha 3.2.x. O card da 3.2.12 usa o selo Disponível com o texto "versão anterior"; o card da v4 é o primeiro do núcleo. O filtro do catálogo segue Disponível/Beta (RC)/Piloto/Em desenvolvimento, e `docs/assets/data/produtos.json` é a fonte que o JS hidrata — editar só o HTML não muda a tela. Antes da primeira abertura da v4, o banco da 3.2.12 precisa ser copiado de `%APPDATA%\caracore\caracore-pdv.db` para `data\caracore-pdv.db`. Retomada operacional: `caracore-pdv/docs/arquitetura/CONTINUIDADE_DESENVOLVIMENTO.md` e `docs/arquitetura/DECISOES_GA_V4.md` na oficina.
- **Hub:** o cartão vigente é a pré-release Windows `v2.1.0-rc1.10`, publicada em 07/11/2026 em ZIP portátil (sem instalador NSIS; SHA-256 `0b18fbcf…8dae00`, o mesmo publicado na release; o canal de atualização publica o manifesto assinado em Ed25519). **O aceite formal de QA desta build está pendente** e o GA do instalador está planejado para 06/04/2027. O banco do produto é SQLite local (WAL). A release seguinte entra com outra tag e os SHA-256 dessa tag, no mesmo corte da loja `hub.caracore.com.br` e da matriz. A vitrine descreve a aplicação web 2.1 sobre Tomcat embutido no instalador, com SQLite local; `WAR` e "oficina" não entram no texto público (alinhamento de 20/10/2026, commit `d5295f0`).
- **Ink:** a loja serve o Desktop `v2.2.1` para Windows e Linux, com os três perfis e a equipe por papéis. O Desktop 2.3.0 está **planejado para 29/01/2027** e o conteúdo dessa versão ainda **não está publicado** — não anunciar como entregue. A 3.0 em PWA fica para depois e não antes de 2028.
- **Seed:** o cartão no catálogo aponta para a pré-release candidata Windows `0.1.5`, com SHA-256 publicado, e mantém a `0.1.4` como release estável anterior. É um piloto público para avaliação, ainda não homologado nem pronto para produção; homologação independente permanece pendente. A API administrativa exige sessão ADMIN/CSRF e as rotas de integração usam token por licença; Host é validado globalmente, o horário de heartbeat usa UTC do servidor e a documentação OpenAPI funciona localmente sem CDN. Ao atualizar, preservar banco e chaves; os bancos 0.1.3/0.1.4 e assinaturas antigas continuam compatíveis. O Seed integra o ecossistema como ferramenta local complementar de gestão de clientes e licenças; cada produto mantém seu aplicativo e banco. Sem monitoramento remoto de sinais periódicos; Linux fica fora desta etapa; primeiro acesso `admin`/`admin`, nova senha de 12 a 128 caracteres com confirmação e chave de recuperação. O piloto não exige convite.
