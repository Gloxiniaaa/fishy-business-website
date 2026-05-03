import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { devlogEntries } from "@/data/devlog";

export function DevlogDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const entry = devlogEntries.find((e) => e.id === id);

  if (!entry) {
    return (
      <SiteLayout>
        <div className="container max-w-3xl py-20">
          <Button
            variant="ghost"
            onClick={() => navigate("/about")}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About
          </Button>
          <h1 className="text-4xl font-display font-bold">Devlog not found</h1>
          <p className="text-muted-foreground mt-4">
            The devlog entry you're looking for doesn't exist.
          </p>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="container max-w-3xl py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/about")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to About
        </Button>

        <article className="prose prose-invert max-w-none">
          <div className="mb-8 pb-8 border-b border-border">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
              {entry.title}
            </h1>
            <time className="text-sm text-muted-foreground">{entry.date}</time>
          </div>

          {entry.image && (
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full rounded-lg mb-8 object-cover"
              loading="lazy"
            />
          )}

          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const language = match ? match[1] : "text";

                if (inline) {
                  return (
                    <code className="bg-card px-2 py-1 rounded font-mono text-sm">
                      {children}
                    </code>
                  );
                }

                return (
                  <div className="my-4 rounded-lg overflow-hidden">
                    <SyntaxHighlighter
                      style={dracula}
                      language={language}
                      PreTag="pre"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                );
              },
              h2: ({ children }) => (
                <h2 className="text-2xl md:text-3xl font-display font-bold mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl md:text-2xl font-display font-semibold mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-4 space-y-2">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="text-base md:text-lg text-muted-foreground">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-muted-foreground">
                  {children}
                </blockquote>
              ),
            }}
          >
            {entry.content}
          </ReactMarkdown>
        </article>

        <div className="mt-16 pt-8 border-t border-border">
          <Button
            variant="ghost"
            onClick={() => navigate("/about")}
            className="w-full md:w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About
          </Button>
        </div>
      </div>
    </SiteLayout>
  );
}
