import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, X, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Index = () => {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [limit, setLimit] = useState("50");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('scrape-leads', {
        body: { query, country, city, limit },
      });

      if (error) throw error;
      
      console.log("Results:", data);
      toast.success("Search completed!");
    } catch (error: any) {
      console.error("Search error:", error);
      toast.error(error.message || "Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const clearFilters = () => {
    setCountry("");
    setCity("");
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-6">
      <div className="w-full max-w-lg space-y-6 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Pluria
          </h1>
          <p className="text-sm text-muted-foreground">
            Encuentra espacios de coworking y cafés en segundos
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-card rounded-xl shadow-sm p-4 space-y-3">
          {/* Main Search */}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="¿Qué tipo de espacios buscas? Ej: coworkings, cafés..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 border-0 bg-transparent focus-visible:ring-0 h-10 text-foreground placeholder:text-muted-foreground"
            />
            <Button
              onClick={handleSearch}
              size="icon"
              disabled={isLoading}
              className="bg-foreground hover:bg-foreground/90 text-background rounded-lg h-10 w-10 shrink-0"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
            </Button>
          </div>

          {/* Filters Row */}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="País"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-20 h-8 text-sm rounded-md border-border"
            />
            <Input
              type="text"
              placeholder="Ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-20 h-8 text-sm rounded-md border-border text-secondary placeholder:text-secondary"
            />
            <Input
              type="number"
              placeholder="50"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              className="w-16 h-8 text-sm rounded-md border-border"
            />
            <button
              onClick={clearFilters}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
