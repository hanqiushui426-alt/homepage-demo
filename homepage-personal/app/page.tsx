import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 头部 */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">文哥AI知识库</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">工程领域AI知识库架构师</p>
        </header>

        {/* 核心观点部分 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
            <span className="mr-3 text-indigo-600 dark:text-indigo-400">📜</span>我的核心观点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">信息洪流筑金库，工程智慧定方圆。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">真正的知识库，不是数字杂物间，而是按工程蓝图建造的智慧中枢。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">投资知识管理，是唯一一份随时间增值，且不会被项目结束而清零的资产。</p>
            </div>
          </div>
        </section>

        {/* 个人简介部分 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
            <span className="mr-3 text-indigo-600 dark:text-indigo-400">🧑💼</span>个人简介
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">核心身份</h3>
              <p className="text-gray-700 dark:text-gray-300">
                我是文哥，「文哥AI知识库」主理人。一名依然奋战在工程一线的持证工程师（高级工程师、一级建造师/双专业、PMP），同时也是 "工程领域AI知识库架构师"。
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">专业背景与独特视角</h3>
              <p className="text-gray-700 dark:text-gray-300">
                我始终身处大型市政工程项目的一线。正因如此，我比任何人都更深刻地体会到，知识散落在各处、优秀经验随项目结束而流失，是工程行业最普遍也最致命的效率痛点。
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                这一线视角，正是我All in「AI知识库」内容创作的源泉与底气。我并非脱离实战的空谈者，而是问题的亲历者和解决方法的构建者。我的独特定位在于：将一线工程师的务实洞察与严谨的工程方法论，融入到AI知识库的解决方案中。
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">价值主张</h3>
              <p className="text-gray-700 dark:text-gray-300">
                我专注于服务两类人：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                <li>与我同行的工程从业者与项目管理者：提供能直接用于实战的知识管理方法，帮助你们将技术规范、项目经验和隐性知识，系统化沉淀为个人与团队的"数字资产"。</li>
                <li>所有受困于信息过载、追求方法论的知识工作者：分享一套经过工程思维验证的、高结构化的个人知识管理体系搭建心法。</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">内容与提供</h3>
              <p className="text-gray-700 dark:text-gray-300">
                在这里，你能获得：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                <li>源于一线的实战案例：分享工程背景下，AI知识库解决具体难题的真实场景与数据。</li>
                <li>个人知识系统搭建心法：如何像管理复杂项目一样，架构你的私人"知识总部"。</li>
                <li>可复用的方法论与工具：提供经过实践检验的知识管理流程、模板与轻量化工具思路。</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">愿景目标</h3>
              <p className="text-gray-700 dark:text-gray-300">
                我期待，通过我的实践与分享，能推动这样一个观念：AI知识库不仅是信息工具，更是现代工程师不可或缺的"数字基建"能力。让我们在建造实体工程的同时，也建造起坚实有序的"知识工程"。
              </p>
            </div>
          </div>
        </section>

        {/* 得意的几件事部分 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
            <span className="mr-3 text-indigo-600 dark:text-indigo-400">💎</span>我得意的几件事
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👨👧</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">用AI生成代码，当孩子的"口算题出题官"</h3>
              <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">背景</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">孩子暑假作业的口算题型独特，市面上找不到现成的软件或书籍能直接生成。</p>
              <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">行动</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">运用工程解决问题的思路：定义需求、选择工具、调试优化，最终通过编写精准的指令，让AI自动生成了海量符合要求的习题。</p>
              <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">价值</h4>
              <p className="text-gray-700 dark:text-gray-300">深刻体会到"真正的效率工具，源于对具体痛点的精准爆破"，是一次完美的"最小可行性产品"实践。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">在训练营兼任助教，成为学习方法的"架构师"</h3>
              <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">背景</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">在樊登沟通力、结构思考力训练营中，我不仅以"优秀学员"毕业，更受邀成为兼职助教。</p>
              <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">行动</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">将复杂的沟通模型与思维方法，用思维导图等工具进行"结构化重构"，形成一套可视化的学习框架分享给学员。</p>
              <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">价值</h4>
              <p className="text-gray-700 dark:text-gray-300">证明我擅长将隐性知识"工程化"为显性、可传播的体系，这正是我现在所做工作的缩影。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">拥抱AI知识库，完成个人工作模式的"系统升级"</h3>
              <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">背景</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">面对主业、副业学习和家庭事务中涌入的海量碎片信息，感到效率低下，经验难以沉淀。</p>
              <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">行动</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">系统性地将AI知识库工具深度融入工作流，所有会议纪要、项目资料、学习心得都被标准化地收纳、关联和标签化。</p>
              <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">价值</h4>
              <p className="text-gray-700 dark:text-gray-300">从"信息被动接收者"转变为"知识主动架构师"，亲身体验了知识系统带来的复利价值。</p>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 文哥AI知识库 | 工程领域AI知识库架构师</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
