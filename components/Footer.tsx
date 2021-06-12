import { GitHub, Twitter, Send, Linkedin, Calendar, Settings } from 'react-feather';
import { Popover } from '@headlessui/react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle';

export default function Footer() {
    return <footer className='w-full text-center border-t border-grey p-4 pb-2 sticky bottom-0 bg-white dark:bg-black'>
        <div className='w-full max-w-4xl mx-auto flex content-center'>
            <a href="https://github.com/halvardssm" target="_blank" className='flex-auto'>
                <GitHub className='mx-auto' />
            </a>
            <a href="https://twitter.com/halvardssm" target="_blank" className='flex-auto'>
                <Twitter className='mx-auto' />
            </a>
            <a href="https://www.linkedin.com/in/halvardm" target="_blank" className='flex-auto'>
                <Linkedin className='mx-auto' />
            </a>
            <a href="https://calendly.com/halvardm/15min" target="_blank" className='flex-auto'>
                <Calendar className='mx-auto' />
            </a>
            <a href="mailto:jobs@moerstad.no" target="_blank" className='flex-auto'>
                <Send className='mx-auto' />
            </a>
            <div className="flex-auto">
                {/* Add the following once there are more settings, and add pb-2 to footer tag */}
                <Popover className="relative">
                    <Popover.Button><Settings /></Popover.Button>

                    <Popover.Panel className="absolute z-10 right-0 bottom-16 bg-white dark:bg-black w-28 flex flex-col p-2 py-3 rounded-sm border border-grey">
                        <LanguageToggle className='mx-full min-h-full mb-3 text-2xl' />
                        <ThemeToggle className='mx-full min-h-full' />
                    </Popover.Panel>
                </Popover>
            </div>
        </div>
    </footer>
}