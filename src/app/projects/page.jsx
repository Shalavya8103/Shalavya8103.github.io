import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import projectsimg from '@/images/logos/projects.svg'

const projects = [
  {
    name: 'Prometheus - AI Powered Business Insights Agent',
    description:
      'Prometheus is an AI-powered assistant that helps analysts turn business questions into insights instantly—no code, no delay.',
    link: {
      href: 'https://github.com/Shalavya8103/Prometheus',
      label: 'Github',
    },
    logo: projectsimg,
  },
  {
    name: 'SpeechFlow- AI Powered Transcription, Summarization and Task Tracking',
    description:
      'SpeechFlow is a real-time speech-to-text and transcription platform powered by AI. It converts spoken language into accurate, structured text—ideal for meetings, content creation, accessibility, and more.'

,
    link: {
      href: 'https://github.com/Shalavya8103/SpeechFlow',
      label: 'Github',
    },
    logo: projectsimg,
  },
  {
    name: 'AgriPredict – Crop Disease Detection & Yield Prediction',
    description:
      'AgriPredict is an AI-powered platform that helps farmers and agribusinesses make data-driven decisions by forecasting crop yields, detecting diseases early, and optimizing resource use for better productivity and sustainability.',
    link: { href: 'https://github.com/Shalavya8103/Agri-Predict', label: 'Github' },
    logo: projectsimg,
  },
  {
    name: 'StockTracker',
    description:
      'StockTracker is a smart stock analysis tool that uses AI to track market trends, detect chart patterns, and provide data-driven insights to help traders make informed decisions in real time.',
    link: {
      href: 'https://github.com/Shalavya8103/Stock-Tracker',
      label: 'Github',
    },
    logo: projectsimg,
  },
  {
    name: 'CricPredict',
    description:
      'Cricket Predictor is a machine learning model that forecasts match winners and win margins using historical data, team stats, and real-time conditions—bringing data-driven precision to cricket predictions.',
    link: {
      href: 'https://github.com/Shalavya8103/Cricket-Prediction',
      label: 'Github',
    },
    logo: projectsimg,
  },
  {
    name: 'Realtime ASL Recognition System',
    description:
      'Real-time ASL Recognition is an AI-powered system that detects and interprets American Sign Language gestures on the fly using computer vision and deep learning—enabling seamless communication through hand sign recognition.',
    link: {
      href: 'https://github.com/Shalavya8103/Realtime-ASL-Recognition',
      label: 'Github',
    },
    logo: projectsimg,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Featured Projects',
  description: 'Projects where I turn data into action through code, models, and insight.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects where I turn data into action through code, models, and insight."
      intro="I’ve worked on numerous AI and ML over the years, but these are the ones I'm most proud of. Take a look under the hood, and feel free to email me with any suggestions on how I can improve."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
