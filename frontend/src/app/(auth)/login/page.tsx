import RootLayout from '@/components/layout/RootLayout'
import { LoginForm } from '@/components/forms/AuthForms'

export default function LoginPage() {
  return (
    <RootLayout>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <LoginForm />
              <p className="text-sm font-light text-gray-500">
                Don&apos;t have an account yet?{' '}
                <a href="/register" className="font-medium text-blue-600 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}