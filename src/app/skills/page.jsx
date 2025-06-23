import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Skills and Certifications',
  description: "A collection of my core technical skills and professional certificates.",
}

const languages = [
  'Python',
  'R',
  'Java',
  'C++',
  'SQL',
  'JavaScript',
]

const frameworks = [
  'Node.js',
  'TensorFlow',
  'PyTorch',
  'OpenCV',
  'ScikitLearn',
  'Langchain',
  'Flask',
  'Django'
]

const tools = ['Docker & Kubernetes', 'AWS', 'CI/CD', 'Git']

const Interests = [
  'Machine Learning',
  'Deep Learning',
  'Artificial Intelligence',
  'Data Visualization',
]

const skillCategories = [
  { title: 'Languages', items: languages },
  { title: 'Frameworks', items: frameworks },
  { title: 'Tools', items: tools },
  { title: 'Interests', items: Interests },
]

const certificates = [

  {
    name: 'AWS Academy Graduate',
    issuer: 'AWS Academy Cloud Foundations',
    link: 'https://www.credly.com/badges/f5e2ea48-48ad-40fd-8fa4-12807610dc34/public_url',
  },
  {
    name: 'Complete Guide to TensorFlow for Deep Learning with Python',
    issuer: 'Pierian Training',
    link: 'https://www.udemy.com/certificate/UC-da79d885-683b-45fd-94fe-a69c57b0d286/',
  },
  {
    name: 'Artificial Intelligence and Machine Learning',
    issuer: 'Powered by Google Developers',
    link: 'https://smartinternz.com/internships/google_developers/083b0d5134ef0a9c325c90d6c7371fed',
  },
  {
    name: 'The Complete Node.js Developer Course',
    issuer: 'Andrew Mead, Rob Percival',
    link: 'https://www.udemy.com/certificate/UC-874d20ec-0426-42a2-b29b-fc0a44d14fac/',
  },
]

export default function Skills() {
  return (
    <SimpleLayout
      title="Skills and Certifications"
      intro="Technologies I work with and certifications I have earned."
    >
      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Certificates</h2>
          <ul className="mt-4 space-y-2">
            {certificates.map((cert) => (
              <li key={cert.name} className="text-zinc-600 dark:text-zinc-400">
                <a
                  href={cert.link}
                  className="font-medium text-blue-500 hover:underline dark:text-blue-400"
                >
                  {cert.name}
                </a>{' '}
                - {cert.issuer}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Skills</h2>
          <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400">
                  {category.title}
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SimpleLayout>
  )
}