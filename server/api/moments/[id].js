export default defineEventHandler((event) => {
    const id = event.context.params.id;
    const moments = {
      "614556facd07331621f6bb0a": {
        id: "614556facd07331621f6bb0a",
        title: "Special Birthday Celebration",
        details: "This was a memorable birthday event with family and friends.",
        futureDate: "2025-03-20T12:00:00Z",
        createdAt: "2023-01-22T08:30:00Z",
      },
      "614556facd07331621f6bb0b": {
        id: "614556facd07331621f6bb0b",
        title: "Graduation Ceremony",
        details: "An unforgettable graduation day filled with joy and excitement.",
        futureDate: "2025-05-15T14:00:00Z",
        createdAt: "2023-06-10T10:15:00Z",
      },
    };
  
    return moments[id] || { error: "Moment not found" };
  });
  