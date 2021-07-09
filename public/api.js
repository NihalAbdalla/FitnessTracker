const API = {

    async createWorkout(data = {}) {
      const res = await fetch("/api/workout", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
  
      const json = await res.json();
  
      return json;
    },
  
    async getWorkout() {
      const res = await fetch(`/api/workout`);
      const json = await res.json();
  
      return json;
    },
  };