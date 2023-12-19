import { TypeAnimation } from 'react-type-animation';

export default function AnimationType() {
    return (
        <TypeAnimation
            sequence={[
            'I`m a Web Developer.',
            1000,
            'I`m a Student.',
            1000,
            'I love to learn something new.',
            1600,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            className='text-gray-200 font-bold tracking-wider text-3xl'
            repeat={Infinity}
        />
    )
}