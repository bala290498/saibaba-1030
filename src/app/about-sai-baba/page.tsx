import { GRADIENTS } from "@/lib/constants";
import { BookOpen, Heart, Sparkles } from "lucide-react";

export default function AboutSaiBabaPage() {
  return (
    <div 
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.light
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="w-16 h-16 text-divine-saffron mx-auto mb-4" />
          <h1 
            className="text-5xl font-bold mb-4 text-gray-800"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            About Sai Baba
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Learn about the life and teachings of Shirdi Sai Baba
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-divine-saffron mb-4">Who is Sai Baba?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shirdi Sai Baba was an Indian spiritual master who is regarded by his devotees as a saint, 
              fakir, and satguru. He lived in the late 19th and early 20th centuries in Shirdi, Maharashtra, 
              India. Sai Baba&apos;s teachings combined elements of Hinduism and Islam, and he is revered by 
              people of all faiths.
            </p>
            <p className="text-gray-700 leading-relaxed">
              He taught a message of love, forgiveness, helping others, charity, contentment, inner peace, 
              and devotion to God and guru. His teachings are simple yet profound, emphasizing the unity 
              of all religions and the importance of selfless service.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-divine-saffron mb-4 flex items-center gap-2">
              <Heart className="w-8 h-8" />
              Core Teachings
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-divine-saffron mt-1 flex-shrink-0" />
                <span><strong>Love All, Serve All:</strong> Show compassion and kindness to every living being.</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-divine-saffron mt-1 flex-shrink-0" />
                <span><strong>Help Ever, Hurt Never:</strong> Always be ready to help others and never cause harm.</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-divine-saffron mt-1 flex-shrink-0" />
                <span><strong>Unity of Religions:</strong> All paths lead to the same divine truth.</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-divine-saffron mt-1 flex-shrink-0" />
                <span><strong>Faith and Patience:</strong> Trust in the divine and remain patient in all circumstances.</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-divine-saffron mt-1 flex-shrink-0" />
                <span><strong>Selfless Service:</strong> Serve others without expecting anything in return.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-divine-saffron mb-4">Famous Sayings</h2>
            <div className="space-y-4">
              <blockquote className="text-xl text-gray-700 italic border-l-4 border-divine-saffron pl-4">
                &ldquo;Love one another and help others to rise to the higher levels, simply by pouring out love. 
                Love is infectious and the greatest healing energy.&rdquo;
              </blockquote>
              <blockquote className="text-xl text-gray-700 italic border-l-4 border-divine-saffron pl-4">
                &ldquo;Why fear when I am here?&rdquo;
              </blockquote>
              <blockquote className="text-xl text-gray-700 italic border-l-4 border-divine-saffron pl-4">
                &ldquo;All that we are is the result of what we have thought.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

