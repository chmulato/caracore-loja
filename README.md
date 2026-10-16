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

1. **CaraCore PDV (Java):** `v3.2.12-free` publicada como estável em 15/10/2026, com homologação em andamento. Requer JDK 25 instalado. SHA256 Windows: `6d7a50b0acf2a05620a090eebdd48f049a1dd5599ccb6c40c419c38145f7c0e2`; Linux e macOS usam o mesmo pacote Java portátil: `795a396318da61d1bd45dcfe816879d2184706f1c7849f1cd2ad98baa99fd9c1`. A `v4.0.0-rc6` é a prévia Windows para avaliação (SHA256 `0c00b24b33b3c365fd1f24ec173bfa4e35bedf1946b2df4151035250780d5325`), com Java 25 incluído; requer Windows 10/11 x64 e Microsoft Edge. A `v4.0.0-rc5` fica no histórico. PIX integrado e emissão fiscal estão em desenvolvimento, não disponíveis hoje. [Download e ressalvas](https://pdv.caracore.com.br/download.html).
2. **CaraCore PDV (Rust):** `v0.1.4` piloto Windows (ZIP).
3. **CaraCore CSO Frotas:** Gestão de frotas com acesso online (SaaS); sem download.
4. **CaraCore CSO Transportes:** Em breve; GA planejado para 08/11/2028; sem download público.
5. **CaraCore Hub:** `v2.1.0-rc1.2` pré-release Windows x64, instalador NSIS e ZIP, sem assinatura; GA planejado para 06/04/2027.
6. **Ink Agenda:** `v2.0.1` estável para Windows (ZIP e instalador).
7. **Minerador ETE 4.0:** `v1.2.3` estável para Windows, Linux e macOS.
8. **Reino OIDC:** `v2.0.2-free` para Windows. As três Eras são gratuitas para estudo pessoal, sem certificado digital. A edição paga está em desenvolvimento; a loja não combina PIX nesta etapa. Dúvidas e relatos são bem-vindos, sem SLA. Sem certificação nem consultoria. A página de download oferece só `v2.0.2-free`. `v2.0.1-free` e `v2.0.0` ficam no histórico.
9. **Circuito Ferradura:** `v2.0.24` na loja e na release. Executável Windows sem assinatura digital; pacotes Windows, macOS e HTML offline. SHA256 do EXE `eca7027c08d062f1fcbfb529092db53e5f30a3766d286ec448089c2f8734aa12`. `v2.0.23` fica no histórico.
10. **BioReator 4.0:** Community `1.1.1` publicada em 13/10/2026 para Windows x64, sem assinatura digital. MSI, ZIP e EXE dentro do ZIP. SHA256 do MSI `6eb0dd01006304d78c74f185345711bc8d4e135b03443d2ab583379338b04b21` · ZIP `b36d18a0fae828f359db3c2a6509ad519849e560487d0ebbfaa3c3c85e09e1d7` · EXE `88eb22c17b547ded71aed275021bfbbd4121b171cbaba4373dfdca96c11a609a`. A 1.1.1 distingue biomassa viável e total, calcula P/V pelo volume líquido e registra o primeiro critério de término; mantém os efeitos configurados de oxigênio, temperatura e pH, fase lag, decaimento celular, término por esgotamento do substrato e estimativa de UFC/mL da 1.1.0. A Premium chega em 18/06/2027, sem preço e sem PIX. A vitrine é `https://ru.caracore.com.br`.
11. **CaraCore Seed:** pré-release candidata pública Windows x64 `0.1.5` para avaliação, ainda não homologada nem pronta para produção; `0.1.4` permanece a release estável anterior. Instalador unsigned: 216.466.586 bytes; SHA-256 `e449ca2cee74fda135ac098d2333fe674c2c476773a7d4adb60bc016a767db16`. Aplicação local de gestão de clientes/licenças no ecossistema Cara Core, com API protegida, porta dinâmica e documentação local sem CDN. Migra bancos 0.1.3/0.1.4 preservando dados e chaves; licenças antigas podem exigir rotação do token. Linux fica fora desta entrega; sem monitoramento remoto de sinais periódicos.

## 🛠️ Publicação no GitHub Pages

- **Custom Domain:** `download.caracore.com.br` (definido no arquivo `CNAME` e `docs/CNAME`).
- **Apontamento DNS (Registro.br):** CNAME `download.caracore.com.br` → `chmulato.github.io`.
- **Branch:** `master` (servindo de `/` ou `/docs`).

---

## 🔒 Verificação de Integridade

Os downloads listados exibem os SHA256 publicados nas respectivas releases para conferência no terminal (PowerShell ou Bash).
