import type { TemplateLocale } from '../../types'
export type Copy = readonly [string, string]
export const t = (value: Copy, locale: TemplateLocale) => value[locale === 'en' ? 1 : 0]
export const nav: { id: string; label: Copy }[] = [
  { id: 'features', label: ['功能亮点', 'Features'] }, { id: 'how-it-works', label: ['使用流程', 'How it works'] },
  { id: 'integration', label: ['平台集成', 'Integration'] }, { id: 'performance', label: ['增长表现', 'Performance'] },
  { id: 'pricing', label: ['订阅方案', 'Pricing'] }, { id: 'faq', label: ['常见问题', 'FAQ'] },
  { id: 'about-us', label: ['关于我们', 'About us'] }, { id: 'client-insights', label: ['客户洞察', 'Client insights'] },
]
export const copy = {
  heroA: ['让增长更有方向', 'Amplify your growth'], heroB: ['借助', 'with'], heroAccent: ['智能 AI', 'Smart AI'], heroEnd: ['洞察', 'insights'],
  heroDesc: ['只需一步，让强大的数据分析成为业务增长的全新动力。', 'You are just one click away from transforming your business with powerful analytics support.'],
  growing: ['家成长型企业', 'GROWING BUSINESSES'], trial: ['开始免费体验', 'Start Free Trial'], how: ['了解使用流程', 'How it Works'],
  partners: ['携手全球伙伴 共同创造增长', 'GROWING PARTNERSHIP AROUND THE WORLD'],
  processTitle: ['简单四步 开启增长', 'Explore Our Simple, Easy Process'], processDesc: ['轻松开始，在每一步专业指引下，让业务从起点就蓬勃发展。', 'Start with ease and watch your business thrive from the get-go with personalized guidance every step of the way'],
  integrationTitle: ['强大集成 从此简单', 'Powerful Integrations Made Simple'], integrationDesc: ['将喜爱的平台连接成统一生态，让团队协作与业务运行更加流畅。', 'Integrate your favorite platforms into one powerful ecosystem, enabling seamless collaboration and enhanced efficiency.'],
  performanceTitle: ['我们的里程碑 你的新优势', 'Our Milestones, your Advantage'], performanceDesc: ['从每一次营销活动到每一个 AI 洞察，让可衡量的增长在全球发生。', 'Driving measurable growth worldwide with every campaign launched, user supported, and AI-driven solution delivered.'],
  teamTitle: ['认识创始团队', 'Meet the Founders'], teamDesc: ['以专业构筑未来，用创新让明天的商业科技在今天发生。', "The minds behind innovative solutions, making tomorrow's tech today with expertise that shapes the future of business."],
  story: ['一路走来', 'The Story So Far'], storyA: ['三位热爱 AI 的朋友相识于斯坦福人工智能实验室。经历无数个伴着咖啡的编程夜晚，我们进入了 Y Combinator 加速器。如今，在优秀投资伙伴的支持下，我们正让全球企业都能用上 AI。', "Three friends with a shared passion for AI met at Stanford's AI Lab. After countless coffee-fueled coding sessions, we got into YC's Winter '20 batch. Today, backed by Silicon Valley's finest, we're making AI accessible to businesses worldwide."],
  storyB: ['我们将 AI 专业知识与商业分析相结合，帮助企业做出明智、有数据依据的决策。持续创新，让数据成为可落地的战略优势，推动全球业务增长。', "We're industry leaders in AI-driven business solutions, enabling companies to make smarter, data-backed decisions. Our team blends AI expertise with business analytics to deliver impactful results. Committed to innovation, we've helped thousands transform data into strategic advantages, driving growth and success globally."],
  clientsTitle: ['听听客户怎么说', 'What Our Clients Say'], clientsDesc: ['先进的解决方案如何改变业务增长？让客户讲述真实的转变。', "How our clients transform growth with advanced solutions. And here's exactly how they did it."],
  pricingTitle: ['选择适合你的方案', 'Explore Our Plans'], pricingDesc: ['灵活的月度方案，更划算的年度订阅。', 'Super flexible monthly plans and cost-effective annual subscriptions.'],
  faqTitle: ['关于平台 你想知道的事', 'Burning Questions About'], faqDesc: ['简单清晰的回答，让每一步更笃定。', 'Simple answers to make things clear.'],
  cta: ['准备好了吗 聊聊你的想法', "Ready? Let's Talk!"], ctaDesc: ['围绕你的业务需求与转型方向，获取专属的专业洞察。', 'Get expert insights and answers tailored to your business requirements and transformation.'],
  book: ['预约交流', 'Book a Call'], available: ['还有 2 个预约名额', '2 spots available'], journal: ['增长期刊', 'Journal'], contact: ['联系我们', 'Contact'],
  journalTitle: ['分析与创新期刊', 'Analytics & Innovation Journal'], journalDesc: ['以智能洞察 赋能每一次决策', 'Empowering decisions with intelligent insights'],
  contactTitle: ['我们愿意倾听', "We're Here to Help"], contactDesc: ['与我们聊聊，我们将在 24 小时内回复。', "Get in touch with us – we'll respond within 24 hours"],
  demo: ['演示表单仅在本地校验，不发送、不保存任何信息。', 'Demo form: validation only. Nothing is sent or saved.'],
  success: ['本地校验通过；信息未发送或保存。', 'Validation passed. Your information was not sent or saved.'],
  footer: ['让每一次增长 都有洞察相伴', 'Advanced strategies with Smart AI insights.'], newsletter: ['不错过新的灵感', 'Stay in the Loop'],
} satisfies Record<string, Copy>
export const steps: {title:Copy;desc:Copy;image:string}[] = [
  {title:['注册与建档','Sign up & Profile'],desc:['按照引导完成注册，即刻进入专属数据看板。','Create your account with our guided setup process. Access your personalized dashboard instantly.'],image:'T4WPBy86OK9JDni3k91xLjIeM.svg'},
  {title:['个性化设置','Personalisation'],desc:['告诉我们目标与偏好，用 AI 洞察定制你的专属体验。',"Tell us your goals and preferences. We'll customize your experience with AI-driven insights."],image:'nELWKm9Mmf4Dtirj6HehxfPoDBU.svg'},
  {title:['制定增长策略','Strategy'],desc:['实施与目标一致的数据策略，实时优化业务表现。','Implement data-backed strategies aligned with your objectives. Optimize your performance in real-time.'],image:'7rrCaekOoILCIdaxzb5TqlARuE.svg'},
  {title:['分析与规模化','Analyze & Scale'],desc:['通过清晰的分析衡量成功，放大有效策略，持续增长。','Monitor your success through clear analytics. Scale what works and optimize for growth.'],image:'vfCWe8jjf75uvUu7vyzDzC4JLU.svg'},
]
export const metrics: {label:Copy;value:number;unit:string}[] = [
  {label:['已启动营销活动','Campaigns Launched'],value:6,unit:'K+'},{label:['活跃平台用户','Active Platform Users'],value:34,unit:'K'},
  {label:['已生成 AI 洞察','AI Insights Generated'],value:200,unit:'K'},{label:['全球互动','Global Engagement'],value:180,unit:'K'},
  {label:['客户满意度','Customer Satisfaction'],value:92,unit:'%'},{label:['战略解决方案','Strategic Solutions'],value:36,unit:'K'},
]
export const founders = [
  {name:'Zane Wilder',role:['首席执行官','CEO'] as Copy,image:'9pmV8Rjhl56Is0AguVOneDJuycc.jpeg'},
  {name:'Ethan Blake',role:['创新负责人','Head of Innovation'] as Copy,image:'tPqHwKj0H2QZxoHvnhGA5OvON8.jpeg'},
  {name:'Rita Hayes',role:['产品负责人','Head of Product'] as Copy,image:'zdlF4pVvQUrfmpTAxk21ZbXt4b4.jpeg'},
]
export const testimonials: {name:string;role:Copy;quote:Copy;image:string}[] = [
  {name:'Greg Weingartner',role:['Nexusgate 首席执行官','CEO at Nexusgate'],quote:['分析效率有了显著提升，AI 洞察让我们发现了以往容易错过的机会。',"Since implementing this solution, we've seen a dramatic improvement in our analytics efficiency. The AI insights helped us identify opportunities we would have missed."],image:'0Bt0XO6Ekbz64QDkTSVpJvIU7k.jpeg'},
  {name:'Jorn Lande',role:['Spitfire 市场总监','Marketing Director at Spitfire'],quote:['自动化简化了工作流程，让团队生产力更进一步。',"The platform’s automation has streamlined our workflow, enhancing productivity."],image:'8UP48iujSG5PALqDp553LB3bic.jpeg'},
  {name:'Linda Watts',role:['Bastillo 商务总监','Commercial Director at Bastillo'],quote:['可行动的数据洞察，改变了我们的决策过程。','Rescale delivers actionable data, transforming our decision-making process.'],image:'pITvFA9YIPicS23hFWu7Rr5zn0.jpeg'},
  {name:'Jaylen Carter',role:['Nanowise 行业专家','Crypto Specialist at Nanowise'],quote:['直观的界面与扎实的分析，是应对市场变化的必备工具。','Its intuitive interface and robust analytics are essential for market navigation.'],image:'GB1LmHiS7FqQ1HYS8254ayWk7A.jpeg'},
  {name:'Angela Jacobs',role:['Gessler 高级分析师','Senior Analyst at Gessler'],quote:['AI 洞察将分析时间缩短了 45%，也提升了我们响应市场的速度。',"The platform's AI-driven insights transformed our decision-making process, reducing analysis time by 45% and improving our market response rate."],image:'Rjwq6SPWHl5dLNnlsMTBgNGsew.jpg'},
  {name:'Andre Ellis',role:['Avocado 投资总监','Investment Director at Avocado'],quote:['它改变了工作方式，让策略优化更加高效。','This tool is a game-changer, optimizing our strategies efficiently and effectively.'],image:'uVagUAKN5uiqPUPdXQM2fjOyI.jpeg'},
  {name:'Rachel Foster',role:['Nexus Digital 数字战略负责人','Digital Strategy Lead at Nexus Digital'],quote:['短短几周，团队就能以清晰数据为依据，更快、更自信地决策。','What impressed me most was how quickly we saw results. Within weeks, our team was making faster, more confident decisions with clear data to back them up.'],image:'55zlLOloE2rbGiQy8ndrw1EaAWs.jpeg'},
  {name:'Sally Taher',role:['Bastillo 设计负责人','Lead Designer at Bastillo'],quote:['团队拥抱新系统后，生产力持续提升，成果令人振奋。','The transformation was remarkable to witness. Within months, our productivity soared as team members embraced the new system and started delivering exceptional results.'],image:'gEGt81C3YZFSpxbB1qa5dt9dM.jpeg'},
]
export const plans:{name:Copy;monthly:number;annualMonthly:number;features:Copy[]}[]=[
  {name:['基础版','Essential'],monthly:29,annualMonthly:21,features:[['核心数据分析','Core Analytics'],['基础营销活动','Limited Campaigns'],['社区访问','Community Access'],['标准支持','Standard Support']]},
  {name:['进阶版','Advanced'],monthly:79,annualMonthly:57,features:[['包含基础版全部功能','All Essential Features'],['不限营销活动','Unlimited Campaigns'],['高级 AI 预测','Advanced AI predictions'],['优先支持','Priority support'],['团队协作工具','Team collaboration tools']]},
  {name:['企业版','Enterprise'],monthly:199,annualMonthly:145,features:[['包含进阶版全部功能','All Advanced Features'],['定制 AI 模型','Custom AI models'],['API 访问','API access'],['高级集成','Advanced Integrations'],['全天候优先支持','24/7 priority support'],['培训课程','Training Sessions']]},
]
export const faqs:{q:Copy;a:Copy}[]=[
  {q:['新手也适合使用吗？','Is the platform suitable for beginners?'],a:['适合。直观易用的界面、引导式入门和专业支持，陪伴你完成每一步。','Yes, our platform is designed to be intuitive and user-friendly, with guided onboarding and expert support at every step.']},
  {q:['AI 洞察有多准确？','How accurate are the AI insights?'],a:['AI 通过分析大量实时数据、持续学习并适应市场变化，为决策提供洞察。','Our AI delivers highly accurate insights by analyzing vast amounts of real-time data, continuously learning and adapting to market changes.']},
  {q:['能连接已有工具吗？','Can I integrate with my existing tools?'],a:['支持与常用业务平台集成，让现有工作流程保持顺畅。','Yes, we offer seamless integration with popular business tools and platforms, ensuring a smooth connection with your current workflow.']},
  {q:['有哪些安全措施？','What security measures do you have?'],a:['产品方案采用加密与安全协议保护数据。本演示站不接入真实业务数据。','We implement bank-level encryption and advanced security protocols to ensure your data is protected at all times.']},
  {q:['洞察多久更新一次？','How often are insights updated?'],a:['产品支持实时更新，让决策基于最新数据；本演示中的数值为展示数据。','Our platform provides real-time updates and insights, ensuring you always have the latest data for informed decision-making.']},
  {q:['提供哪些支持？','What kind of support do you offer?'],a:['产品方案提供全天候技术支持、客户成功经理和学习资源。','We provide 24/7 technical support, dedicated success managers, and comprehensive resources to ensure your success.']},
]
export const partnerImages=['VjmsqHeWTpcOeQ1me9Gtc9adLE.svg','bcIHofRAGz07Cl47alk4eZweX78.svg','KM1Q6ZA4hUHuWvz4cOZsQI9v0.svg','RZk0FOpNrZ9xFwKUFoQlbL1alzE.svg','LNsbmxTCNLUk4k4J45n8VhPQeWY.svg','1ehZ5pYQJiXu4sArrnMFIo21CAU.svg']
export const integrationImages=['kaBPojiKtWANO7LLDN9j3eqO2C4.svg','iXjFnSH2ScPbmKpgfdqXRk7XAos.svg','VT5eIJpHiYwn6HoI2DWUBOIAGI.svg','npiv1SlvhccnZ04gHvkidKqPKGY.svg','IziRDqmupvblsx76RUXjqWPxUY.svg','hkQe6HGGonnuBrvAn6MAQP1Fg.svg']
