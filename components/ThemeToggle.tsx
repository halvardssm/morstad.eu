import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'react-feather';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const dark = theme === 'dark' ? true : false;

    const [checked, setChecked] = useState(dark);
    const [mounted, setMounted] = useState(false);

    const handleChange = (nextChecked: boolean) => {
        setChecked(nextChecked);
    };

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    useEffect(() => {
        setTheme(checked ? 'dark' : 'light');
    }, [checked, setTheme]);

    if (!mounted) return null;

    const classes = 'm-auto'

    return checked
        ? <Sun className={classes} onClick={() => handleChange(false)} />
        : <Moon className={classes} onClick={() => handleChange(true)} />
}
