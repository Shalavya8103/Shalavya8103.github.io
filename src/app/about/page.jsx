/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { LinkedInIcon, GitHubIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: `I'm Muhammad, a front-end developer from Pakistan. Although I explored various fields like video editing and graphic design, none truly resonated with me. My journey into front-end development began in 2020 when I discovered HTML and CSS, and I haven't looked back since. I'm always staying up-to-date with the JavaScript ecosystem, excited to see what comes next.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Data Scientist passionate about creating smart, innovative solutions.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I’m Shalavya Agrawal, a Data Scientist and AI Developer driven by curiosity and a deep
             interest in building intelligent systems that solve real-world problems. My journey into data began with 
             an interest in how patterns emerge from numbers—and quickly
             evolved into a passion for machine learning, deep learning, and data-driven decision-making.
            </p>
            <p>
            Currently pursuing an MS in Data Science at Northeastern University, I’m constantly sharpening my 
             in areas like probabilistic modeling, MLOps, and large-scale data systems.
             For me, the most rewarding part of working in AI is seeing ideas go from 
            concept to product—creating tools that not only work but make a real impact.
           
            </p>
            <p>
            I spend most of my time searching for solutions to problems and
              bugs on my own, often turning to Google and ChatGPT for answers. I
              make mistakes and get frustrated, but I believe this is all part
              of the learning process. Despite the challenges, I continue to
              build and grow as a data scientist.
            </p>
            
            <p>
            I’ve developed a strong foundation across the AI stack, from statistical modeling
             and data preprocessing to deploying scalable ML solutions. I work with tools like 
             Python, scikit-learn, TensorFlow, PyTorch, and SQL, and 
            I’m always exploring the latest in AI research and technologies to stay ahead of the curve.
            </p>
            <p>
              Last but not least, I am a Computer Science graduate, but I still build, break, learn, and iterate.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/shalavya-agrawal/"
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/Shalavya8103"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="mailto:shalavyaagrawal@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              shalavyaagrawal@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
