const publicationsData = [
  {
    title: 'Synthetic Patient Generation: A Deep Learning Approach Using Variational Autoencoders.',
    description: `Artificial Intelligence in healthcare is a new and exciting frontier and the possibilities are endless. With deep learning approaches beating human performances in many areas, the logical next step is to attempt their application in the health space. ...`,
    // imgSrc: '/static/images/utu-care-logo.png',
    authors: "Salim A.",
    dateString: "2018 Aug.",
    journal: "Arxiv",
    doi: "arXiv:1808.06444",
    href: 'https://arxiv.org/abs/1808.06444',
  }, {
    title: 'Decision Support in Low Resource Areas: Experiences from the Field [Conference Presentation].',
    description: ``,
    // imgSrc: '/static/images/cado_logo.png',
    authors: "Salim A.",
    dateString: "2020 Dec.",
    journal: "NeurIPS 2020",
    doi: "",
    href: 'https://slideslive.com/38940874/decision-support-in-low-resource-areas-experience-from-the-field',
  }, {
    title: 'AI-Powered Digital Health Tools to Optimize Decision Making and Improve Health Outcomes at Primary Health Facilities in Tanzania [abstract].',
    description: `In: Proceedings of the 9th World Sustainability Forum;`,
    // imgSrc: '/static/images/logo.png',
    authors: "Salim A.",
    dateString: "2021 Sept.",
    journal: "9th World Scientific Forum;",
    doi: "Abstract number Sciforum-050183",
    href: 'https://wsf-9.sciforum.net/events_files/353/customs/4bb529eaf3476781b77fa310e7af486b.pdf',
  },
  {
    title: 'Understanding how the use of AI decision support tools affect critical thinking and over-reliance on technology by drug dispensers in Tanzania.',
    description: `The use of AI in healthcare is designed to improve care delivery and augment the decisions of providers to enhance patient outcomes. When deployed in clinical settings, the interaction between providers and AI is a critical component for measuring and understanding the effectiveness of these digital tools on broader health outcomes. ...`,
    authors: "Salim Jr, A., Allen, M., Mariki, K., Masoy, K. J., & Liana, J.",
    dateString: "2022 Jan.",
    journal: "Arxiv",
    doi: "arXiv:2302.09487",
    href: 'https://arxiv.org/abs/2302.09487'
  }
].sort((a, b) => a.dateString > b.dateString ? -1 : 1)

export default publicationsData
