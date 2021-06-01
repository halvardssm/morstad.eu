import { GitHub, Twitter, Send, Linkedin, Calendar } from 'react-feather';

export default function Footer() {
    return <footer className='w-full text-center border-t border-grey p-4 sticky bottom-0 bg-white'>
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
            <a href="https://calendly.com/halvardm" className='flex-auto'>
                <Calendar className='mx-auto' />
            </a>
            <a href="mailto:jobs@moerstad.no" className='flex-auto'>
                <Send className='mx-auto' />
            </a>
        </div>
    </footer>
}