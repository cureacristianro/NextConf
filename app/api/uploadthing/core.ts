import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const auth = (req: Request) => {
    console.log("Auth middleware: Received request for auth");
    return { id: "fakeId" }; // Simulated authentication
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f({ image: { maxFileSize: "4MB" } })
        // Set permissions and file types for this FileRoute
        .middleware(async ({ req }) => {
            console.log("Middleware: Received request");

            // Simulate user authentication
            const user = await auth(req);

            // Log the authenticated user
            console.log("Authenticated user:", user);

            // If authentication fails, log and throw an error
            if (!user) {
                console.error("Unauthorized request: No user found");
                throw new Error("Unauthorized");
            }

            // Log successful metadata return
            console.log("Middleware successful, returning metadata");
            return { userId: user.id }; // Return metadata for `onUploadComplete`
        })
        .onUploadComplete(async ({ metadata, file }) => {
            // Log when upload completes
            console.log("Upload complete for userId:", metadata.userId);

            // Log the uploaded file information
            console.log("Uploaded file URL:", file.url);

            // Perform any additional server-side actions, if needed
            console.log("Server actions complete, returning response");

            // Return metadata to client
            return { uploadedBy: metadata.userId };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
