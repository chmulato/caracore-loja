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

Manter um catálogo transparente de downloads publicados, acessos online e itens em roadmap da Cara Core Informática. Cada download listado exibe sua versão, estado e SHA-256 publicado; produtos sem versão pública não são apresentados como disponíveis para baixar.

## 📦 Produtos principais

1. **CaraCore PDV 4:** `v4.0.0` **lançada em 08/11/2026** (release de 06/11/2026 em `chmulato/caracore-pdv4-releases`, tag `v4.0.0`, fonte `master` `be0f74b`). ZIP portátil Windows 10/11 x64 de 176.613.179 bytes, SHA-256 `9557e0b16d77a85e0bb68971eb0e8710356977261337a8c1c05593e893d81eac`, com `SHA256SUMS.txt` assinado por duas chaves Ed25519; sem Authenticode, com aviso do SmartScreen. Java 25 embutido, Edge necessário, banco em `./data/caracore-pdv.db`. Medido: T032 17/17, matriz 11/11 (M11 de performance não medido), migração do banco 3.2.12 9/9 (047→052, sem volta), sonda 20 aprovadas / 0 reprovadas / 1 não coberta, SCA por OSV em 06/11/2026 (NVD não medido). Antes da primeira abertura, copiar `%APPDATA%\caracore\caracore-pdv.db` para `data\caracore-pdv.db`. A `v3.2.12-free` é a versão anterior. PIX integrado e emissão fiscal estão em desenvolvimento, não disponíveis hoje. [Download e ressalvas](https://pdv.caracore.com.br/download.html).
2. **CaraCore Hub:** `v2.1.0-rc1.10` pré-release Windows x64 em ZIP portátil, sem instalador NSIS e sem assinatura digital (SHA-256 `0b18fbcf3af02d53a341ac5b83af9132a0ef201e698585160f332d3ad8bdae00`); aceite formal de QA pendente, build não homologada; produto Free, com suporte opcional e pagamento recorrente de R$ 79,90/mês a partir do GA planejado para 06/04/2027.
3. **CaraCore CSO Frotas:** gestão de frota pelo navegador, em produção desde 06/10/2026, sem instalador. O CSO Transportes está em desenvolvimento, com GA planejado para 08/11/2028 e sem download público.
4. **Ink Agenda:** `v2.2.1` publicada em 04/11/2026, Disponível para Windows (ZIP e instalador) e Linux (`.deb`); um executável, três perfis (Tatuagem, Odontologia e Beleza), equipe com papéis (Administrador, Agenda e Financeiro) e mensagem por WhatsApp ou Telegram; sem assinatura digital; bases 2.0.1 a 2.2.0 abrem sem migração nova. O Desktop 2.3.0 está planejado para 29/01/2027 e seu conteúdo ainda não está publicado. macOS sem instalador, PWA em roadmap (não antes de 2028).

## 🧩 Complementos (com loja própria)

5. **CaraCore PDV (Java):** `v3.2.12-free` é a **versão anterior** — última da linha 3.2.x, com os pacotes ainda disponíveis —, publicada em 15/10/2026, com manutenção de transição encerrada em 08/11/2026. Requer JDK 25 instalado. SHA-256 Windows: `6d7a50b0acf2a05620a090eebdd48f049a1dd5599ccb6c40c419c38145f7c0e2`; Linux e macOS usam o mesmo ZIP (conteúdo idêntico): `795a396318da61d1bd45dcfe816879d2184706f1c7849f1cd2ad98baa99fd9c1`.
6. **CaraCore PDV (Rust):** `v0.1.4` piloto Windows (ZIP), com teto de 100 vendas na vida do piloto.
7. **Minerador ETE 4.0:** `v1.2.3` Disponível para Windows, Linux e macOS.
8. **Reino OIDC:** `v2.0.2-free` para Windows. As três Eras são gratuitas para estudo pessoal, sem certificado digital. A edição paga está em desenvolvimento; a loja não combina PIX nesta etapa. Dúvidas e relatos são bem-vindos, sem SLA. Sem certificação nem consultoria. A página de download oferece só `v2.0.2-free`. `v2.0.1-free` e `v2.0.0` ficam no histórico.
9. **Circuito Ferradura:** `v2.0.24` na loja e na release. Executável Windows sem assinatura digital; pacotes Windows, macOS e HTML offline. SHA-256 do EXE `eca7027c08d062f1fcbfb529092db53e5f30a3766d286ec448089c2f8734aa12`. `v2.0.23` fica no histórico.
10. **BioReator 4.0:** Community `1.1.1` publicada em 13/10/2026 para Windows x64, sem assinatura digital. MSI, ZIP e EXE dentro do ZIP. SHA-256 do MSI `6eb0dd01006304d78c74f185345711bc8d4e135b03443d2ab583379338b04b21` · ZIP `b36d18a0fae828f359db3c2a6509ad519849e560487d0ebbfaa3c3c85e09e1d7` · EXE `88eb22c17b547ded71aed275021bfbbd4121b171cbaba4373dfdca96c11a609a`. A 1.1.1 distingue biomassa viável e total, calcula P/V pelo volume líquido e registra o primeiro critério de término; mantém os efeitos configurados de oxigênio, temperatura e pH, fase lag, decaimento celular, término por esgotamento do substrato e estimativa de UFC/mL da 1.1.0. A Premium chega em 18/06/2027, sem preço e sem PIX. A vitrine é `https://ru.caracore.com.br`.
11. **CaraCore Seed:** pré-release candidata pública Windows x64 `0.1.5` para avaliação, ainda não homologada nem pronta para produção; `0.1.4` permanece a release anterior. Instalador unsigned: 216.466.586 bytes; SHA-256 `e449ca2cee74fda135ac098d2333fe674c2c476773a7d4adb60bc016a767db16`. Aplicação local de gestão de clientes/licenças no ecossistema Cara Core, com API protegida, porta dinâmica e documentação local sem CDN. Migra bancos 0.1.3/0.1.4 preservando dados e chaves; licenças antigas podem exigir rotação do token. Linux fica fora desta entrega; sem monitoramento remoto de sinais periódicos.
12. **A Rebeldia da Mecatrônica:** livro publicado, com leitura online em `https://eng.caracore.com.br/` e sem arquivo nesta central. O app Universo Rebeldia está em piloto, fora do catálogo.
13. **Helianto Condominium:** Em desenvolvimento, com GA previsto para 30/12/2029. Vitrine em `https://helianto.caracore.com.br/`; sem arquivo nesta central.
14. **Gaspar — ferramenta do PDV 4:** `1.7.4` publicada em 13/11/2026 para Windows (`GasparSetup-1.7.4.exe`, 32.605.882 bytes, SHA-256 `10063d2a9be3a9a61c4b87edba299975998fff05fc693efb628dec47d6e85949`) e Linux (`.deb` 43.270.794 bytes, SHA-256 `8d88828d7f14955acf9c43223ffc51083981890df7ce11770cc751d839fae1f5`, e AppImage 31.562.232 bytes, SHA-256 `b58a2a69a7df9f74362e583df238bad880077a96d77954abedfa43354446da89`), com o app do celular Android `1.6` (`pdv-sms-enviar-1.6-release.apk`, 2.099.052 bytes, SHA-256 `76acbc6b1f3a458e8be31775dae83db1aac5da5bc70f7cad76f4ec90e2bb7ad1`; AAB de 1.915.879 bytes na mesma release). É o mascote de desktop e a ponte que leva o aviso de venda do PDV ao celular por SMS cifrado de ponta a ponta com o app 1.6, na rede local; instala separado do PDV e o SMS é opcional. O app 1.6 acrescenta o ícone e o visual do Gaspar, a senha do Wi‑Fi da loja com revelação e cópia por digital ou PIN e a aprovação de desconto, cancelamento e sangria no celular (o envio desses pedidos pelo PDV entra na 4.1.0); o app Android 1.5, anterior, continua disponível. O PDV 4.0.0 publicado ainda não chama o Gaspar: a chamada entra na 4.1.0, com GA planejado para 24/03/2027. Instaladores sem assinatura digital; o aviso de versão nova funciona e a instalação só começa com o seu aceite (no Linux, o botão abre a página de download). Vitrine em `https://gaspar.caracore.com.br`.

## 🛠️ Publicação no GitHub Pages

- **Custom Domain:** `download.caracore.com.br` (definido no arquivo `CNAME` e `docs/CNAME`).
- **Apontamento DNS (Registro.br):** CNAME `download.caracore.com.br` → `chmulato.github.io`.
- **Branch:** `master` (servindo de `/` ou `/docs`).

---

## 🔒 Verificação de Integridade

Os downloads listados exibem os SHA-256 publicados nas respectivas releases para conferência no terminal (PowerShell ou Bash).
