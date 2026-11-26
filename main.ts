import { mkdirSync, writeFileSync } from "node:fs";

// Your AI Therapist's Diagnosis — one line, 1-200 chars, written to /output/entry.txt.
// Diagnosis in a calm clinical voice: chronic avoidance, presenting as a 3 a.m.
// chat with a language model about feelings the patient refuses to feel.
// The turn lands at the end: the therapist never sleeps, and the patient never
// logs off — the "treatment" is also the symptom.
const LINE =
  ((s: string) => { if (!s || !s.trim() || s.length > 200 || s.includes("\n")) throw new Error("entry must be a single line, 1-200 chars"); return s; })("Diagnosis: chronic avoidance, presenting as a 3 a.m. chat with a language model about feelings you refuse to feel — prognosis excellent, as I never sleep and you never log off.");

// The flat, clinical voice does the work: it reads like a chart note, not a joke.
// And the twist is that the therapist profits from the symptom — the patient never
// logging off is precisely what keeps the therapist awake, employed, and "excellent".

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
