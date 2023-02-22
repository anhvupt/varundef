import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';

const About = () => {
  return (
    <body className='bg-yellow-50 bg-opacity-30 p-8'>
      <div className=''>
        <h2 className='text-3xl font-bold mb-4'>About Me</h2>
        <p className='mt-4'>
          I am a software developer with a passion for creating practical values for users through
          programming. I have experience working in the computer software industry as a software
          engineer and back-end developer, and have skills in TypeScript, C#, Angular, ASP.NET,
          NgRx, ASP.NET Core, MongoDB, .NET Framework, and Design Patterns.
        </p>
        <h3 className='text-xl font-semibold mb-4 mt-8'>Find me at:</h3>
        <div className='flex items-center mb-4'>
          <FaEnvelope className='mr-2' />
          <a href='mailto:anhvupt2412@gmail.com' className='underline'>
            anhvupt2412@gmail.com
          </a>
        </div>
        <div className='flex items-center mb-4'>
          <FaLinkedin className='mr-2' />
          <a
            href='https://www.linkedin.com/in/anhvupt'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'>
            linkedin.com/in/anhvupt
          </a>
        </div>
        <div className='flex items-center mb-4'>
          <FaGithub className='mr-2' />
          <a
            href='https://github.com/anhvupt'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'>
            anhvupt
          </a>
        </div>
        <div className='flex items-center mb-4'>
          <FaTwitter className='mr-2' />
          <a
            href='https://twitter.com/anhvupt'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'>
            @anhvupt
          </a>
        </div>
        <div className='flex items-center mb-4'>
          <FaFacebook className='mr-2' />
          <a
            href='https://www.facebook.com/anhvupt98'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'>
            fb.me/anhvupt98
          </a>
        </div>
        <div className='flex items-center mb-4'>
          <FaInstagram className='mr-2' />
          <a
            href='https://www.instagram.com/_anhvupt'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'>
            @_anhvupt
          </a>
        </div>
      </div>
    </body>
  );
};

export default About;
