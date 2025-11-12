/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import ASAP from '@/images/logos/ASAP_logo.svg'
import TMDC from '@/images/logos/TMDC_Logo.svg'
import WebCraft from '@/images/logos/WebCraftIT_logo.svg'
import Vinfotech from '@/images/logos/Vinfotech_logo.svg'
import Northeastern from '@/images/logos/NEU_logo.svg'
import VIT from '@/images/logos/VIT_logo.svg'
import DC from '@/images/logos/DC_logo.svg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function EducationsIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 6h16v12H4V6z" // Outer rectangle (edu body)
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M4 6l8 6 8-6" // Top of the edu (like a ribbon or banner)
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <circle
        cx="12"
        cy="14"
        r="2"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />{' '}
      {/* Circular part representing the seal */}
      <path
        d="M8 20l4-4 4 4"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />{' '}
      {/* Ribbon or banner at the bottom */}
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Education({ education }) {
  let startLabel =
    typeof education.start === 'string'
      ? education.start
      : education.start.label

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={education.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {education.company}
        </dd>
        <dt className="sr-only">Title</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {education.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={education.start}>{startLabel}</time>{' '}
        </dd>
      </dl>
    </li>
  )
}

function Educations() {
  let educations = [
    {
      company: 'Northeastern University, Boston',
      title: 'MS in Data Science',
      logo: Northeastern,
      start: '2025 — Present',
    },
    {
      company: 'Vellore Institute of Technology, Vellore',
      title: 'BTech in Computer Science Engineering',
      logo: VIT,
      start: '2021 — 2025',
    },
    {
      company: 'Daly College, Indore',
      title: 'Class 12 CBSE',
      logo: DC,
      start: '2009 — 2021',
    },
  
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <EducationsIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {educations.map((education, index) => (
          <Education key={index} education={education} />
        ))}
      </ol>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'The Modern Data Company',
      title: 'Product Intern',
      logo: TMDC,
      start: 'January 2025',
      end:'April 2025',
    },
    {
      company: 'ASAP Infotech',
      title: 'Data Science Intern',
      logo: ASAP,
      start: 'December 2023',
      end: 'December 2024',
    },
    {
      company: 'Vinfotech Pvt.Ltd.',
      title: 'Data Science Intern',
      logo: Vinfotech,
      start: 'September 2023',
      end: 'November 2023',
    },
  ]

  return (
    <>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work experiences</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, index) => (
            <Role key={index} role={role} />
          ))}
        </ol>
        {}
      </div>
    </>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi there, I'm Shalavya
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m a Data Scientist and AI Developer passionate about building intelligent, efficient, and scalable data-driven applications. 
            I love exploring how machine learning and AI can solve real-world problems,
             and I’m constantly learning and experimenting with new tools, models, and ideas to stay ahead in this ever-evolving field.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/shalavya-agrawal/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/Shalavya8103"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
          <div className="mt-6">
            <Button
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              View Resume
            </Button>
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Educations/>
          </div>
        </div>
      </Container>
    </>
  )
}
