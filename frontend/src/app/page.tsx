// src/app/page.tsx
import RootLayout from '@/components/layout/RootLayout'

export default function Home() {
  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to DigiEvolve Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your digital skills with our expert-led courses
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Explore Courses
          </button>
        </section>
      </div>
    </RootLayout>
  )
}