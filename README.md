# Vicente Júnior BJJ – Núcleo Arapiraca

Site institucional, moderno e responsivo desenvolvido especificamente para a **Vicente Júnior BJJ – Arapiraca**, com identidade visual 100% autêntica baseada no Instagram oficial [@vicentejuniorbjjarapiraca](https://www.instagram.com/vicentejuniorbjjarapiraca/) e estrutura de alta conversão inspirada nas melhores práticas do segmento.

---

## 🥋 Identidade Visual e Informações Oficiais Extraídas

* **Nome Oficial:** Vicente Júnior BJJ – Núcleo Arapiraca (Linhagem Mestre Ricardo De La Riva)
* **Liderança Internacional:** Mestre Luiz Vicente da Silva Júnior (Faixa-Preta 4º Grau, multicampeão mundial e pan-americano)
* **Professores do Núcleo:**
  * Prof. Jadson Leite (Faixa-Preta • 11x Campeão da Liga Alagoana)
  * Prof. Tarciso Manzano (Liderança do Núcleo Arapiraca)
  * Prof. Eduardo Pereira (Instrutor Oficial)
  * Prof. Iranildo do Carmo (Instrutor Oficial)
  * Faixas-pretas graduados no tatame: Prof. Josinaldo Silva, Prof. EA Celestino, Prof. Adrian GK
* **Fotografias Reais:** Mais de 50 fotografias reais de tatame, pódios, graduações e aulões foram baixadas e integradas diretamente no site.
* **Paleta de Cores:**
  * `Deep Onyx / Black`: `#08080a`, `#0c0c10`, `#121319`
  * `Fight Red / Crimson`: `#dc2626`, `#ef4444`, `#b91c1c`
  * `Champion Gold`: `#f59e0b`, `#fbbf24`
  * `Pure White & Zinc`: `#ffffff`, `#f3f4f6`, `#9ca3af`

---

## 🚀 Como Executar o Projeto

```bash
# 1. Instalar dependências (caso necessário)
npm install

# 2. Iniciar servidor de desenvolvimento local
npm run dev

# 3. Gerar build de produção
npm run build

# 4. Pré-visualizar build de produção
npm run preview
```

---

## 📱 Como Editar o Número do WhatsApp e Dados da Academia

Todos os textos, links e números estão centralizados em um único arquivo:

👉 [src/data/academyData.js](file:///C:/Users/anton/OneDrive/Desktop/vicentjiujitsu/src/data/academyData.js)

Basta alterar a propriedade:
```javascript
export const ACADEMY_CONFIG = {
  whatsappNumber: "5582999999999", // Coloque o DDD + número real aqui
  whatsappDisplay: "(82) 99999-9999",
  ...
};
```
Todos os botões de CTA do site atualizarão automaticamente com mensagens personalizadas para cada modalidade e horário!

---

## 📁 Estrutura de Pastas

* `src/data/academyData.js`: Dados centralizados de modalidades, professores, horários, depoimentos, fotos e FAQ.
* `src/components/`:
  * `Navbar.jsx`: Menu responsivo com botão de conversão e drawer mobile.
  * `Hero.jsx`: Primeira dobra de alto impacto com foto real do tatame e destaques.
  * `Sobre.jsx`: História da equipe, Mestre Vicente Júnior e pilares de honra e disciplina.
  * `Beneficios.jsx`: 6 cards detalhados com efeito visual sutil de luz vermelha.
  * `Modalidades.jsx`: Jiu-Jitsu Adulto, Kids & Juvenil, No-Gi, Competição e Feminino.
  * `Horarios.jsx`: Tabela interativa com abas por categoria e visualização mobile em cards.
  * `Professores.jsx`: Perfis dos mestres e instrutores com foto real e títulos.
  * `Conquistas.jsx`: Destaque dos 11 títulos alagoanos, pódios e graduações.
  * `Estrutura.jsx`: Mosaico editorial de fotos da academia e momentos de tatame.
  * `Depoimentos.jsx`: Prova social com avaliações de praticantes e pais.
  * `InstagramFeed.jsx`: Conexão direta com posts e fotos reais do Instagram.
  * `Localizacao.jsx`: Endereço em Arapiraca - AL, mapa escuro e rotas Google Maps.
  * `FAQ.jsx`: Perguntas frequentes com sanfona interativa.
  * `CTAFinal.jsx`: Fechamento com chamada forte para aula experimental gratuita.
  * `Footer.jsx`: Rodapé completo com links rápidos, redes e direitos.
  * `FloatingWhatsApp.jsx`: Botão flutuante de WhatsApp com pulso luminoso.
* `public/images/`: Acervo de imagens reais da equipe e avatar oficial.
