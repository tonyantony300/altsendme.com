"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const fieldClassName =
  'w-full bg-white text-sm text-[#121212] placeholder:text-[#9A9A9A] px-4 focus:outline-none rounded-none border-0';

export default function Contact() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    const accessKey = '5f8ad34e-532c-4372-b840-f93bc9ff89a0';

    if (!accessKey) {
      setError(t('error'));
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          _captcha: false,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError(t('error'));
      }
    } catch {
      setError(t('error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-1 items-center justify-center w-full py-8 px-5 md:px-10 lg:px-[60px] font-funnel-sans">
      <div className="relative w-full max-w-[1100px] overflow-hidden rounded-none">
        <Image
          src="/intouchBg.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1100px) 100vw, 1100px"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/5" aria-hidden="true" />

        <div className="relative min-h-[380px] md:min-h-[400px]">
          {submitted ? (
            <div className="flex min-h-[380px] md:min-h-[400px] items-center justify-center p-8 md:p-10 lg:p-12">
              <p className="text-center text-base md:text-lg text-white leading-relaxed max-w-md">
                {t('success')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-12 p-8 md:p-10 lg:p-12">
              <div className="flex flex-col justify-start">
                <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-tight text-white tracking-tight">
                  {t('title')}
                </h1>
                <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed max-w-[360px]">
                  {t('subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t('message')}
                  required
                  className={`${fieldClassName} min-h-[140px] py-4 resize-none`}
                />

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('name')}
                  required
                  className={`${fieldClassName} h-12`}
                />

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('email')}
                    required
                    className={`${fieldClassName} h-12 sm:flex-1`}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center h-12 px-8 bg-dark text-white text-sm font-medium rounded-none hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                  >
                    {loading ? t('submitting') : t('submit')}
                  </button>
                </div>

                {error && (
                  <p className="text-sm text-white bg-white/10 px-4 py-2 rounded-none">
                    {error}
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
