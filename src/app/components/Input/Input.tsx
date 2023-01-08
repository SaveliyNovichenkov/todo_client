import { InputProps } from './Input.props';
import s from './Input.module.scss';
import { ForwardedRef, forwardRef } from 'react';
import cn from "classnames"

export const Input = forwardRef(
    (
        { className, children, type = 'text', style, error, ...props }: InputProps,
        ref: ForwardedRef<HTMLInputElement>,
    ): JSX.Element => {
        return (
            <div className={s.wrapper} style={style}>
                <input className={cn(s.input, className)} ref={ref} type={type} {...props}>
                    {error && (
                        <span role="alert" className={s.error}>
              {error.message}
            </span>
                    )}
                </input>
            </div>
        );
    },
);

Input.displayName = 'Input';



