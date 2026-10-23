<h1 align="center">Zaid Diab</h1>

<p align="center">
  <strong>AI Engineer & Software Developer</strong><br>
  AI agents, RAG pipelines, and LLM systems, built on solid software, DevOps, and Linux foundations
</p>

<p align="center">
  <a href="https://zaiddiab.com">Portfolio</a> |
  <a href="https://zaiddiab.com/projects">Projects</a> |
  <a href="https://zaiddiab.com/experience">Experience</a> |
  <a href="https://linkedin.com/in/zaiddiab">LinkedIn</a> |
  <a href="mailto:contact@zaiddiab.com">Email</a> |
  <a href="https://zaiddiab.com/zaid-diab-cv.pdf">Resume</a>
</p>

```text
BUILD v3.0 - AGENTIC
LOCATION  Stuttgart, Germany
FOCUS     AI Agents / RAG / LLM Systems / Software Engineering / DevOps
STATUS    Open to full-time roles and freelance work - available now
SIGNAL    AI workflows that actually run in production, not just in demos
```

## What I Build

I build applied AI systems: agent workflows, retrieval and document-analysis
pipelines, local LLM inference, LLM routing, and AI automation for real business
processes.

I don't treat AI as a demo layer. I also build what surrounds the model: the
backend, the evaluation and quality gates, the deployment path, and the Linux
systems underneath. That is what turns a workflow into usable production
software. My background in DevOps, embedded Linux, and edge AI at Porsche
Digital is where that systems discipline comes from.

I am a Computer Science graduate of the German-Jordanian University (AI focus,
June 2026), with an exchange semester at Hochschule Trier focused on robotics,
computer vision, and AI. I completed my internship at Porsche Digital GmbH in
Vehicle Solutions & Data in August 2026.

## Current Signal

| Now | Details |
| --- | --- |
| Role | AI Engineer & Software Developer, open to opportunities |
| Based in | Stuttgart, Germany |
| Availability | Available now for full-time roles; also open to freelance AI work |
| Work authorization | Fiktionsbescheinigung through March 2027; Blue Card sponsorship eligible |
| Leading | EFQM/RADAR AI Report Analyzer: local-first multi-agent RAG, team of five |
| Recently completed | Porsche Digital internship, October 2025 - August 2026 |
| Relocation | Open to roles across Europe and the Middle East |

## Selected Work

### [EFQM/RADAR AI Report Analyzer](https://zaiddiab.com/projects/efqm-radar-rag)

A local-first multi-agent RAG pipeline for first-pass desk assessment of
EFQM-based organizational self-assessment reports. I lead a five-person team
that started with no prior experience in RAG, agent orchestration, or
structured LLM output.

- LangGraph section agents, Pydantic v2 contracts, Ollama, Qdrant, PyPDF,
  RapidOCR, FastAPI, and Jinja2.
- Runs on local LLMs, so sensitive organizational data stays on the workstation.
- Evidence-linked findings with exact quotes, plus an opt-in supervised
  multi-model route: an evaluator, an independent evidence checker, and a
  supervisor that can only approve or stop the run.
- Fail-closed governance: scores are withheld, never guessed, when evidence or
  authoritative scoring rules are missing.
- CI metrics for retrieval, grounding, citation coverage, schema validity, and
  repeated-run stability. A 573-segment calibration run covering 38
  guide items had zero retrieval or grounding failures.
- The integrated team work reached 303 tests at 89.94% coverage. A later
  autonomous implementation reached 1,360 tests at 87.48% coverage.
- Built a seven-day onboarding program and a protected PR workflow with
  explicit owners, acceptance criteria, and quality gates.

Best fit: AI engineer, applied AI, LLM/RAG engineering, AI automation consulting.

### [LLM Routing System](https://zaiddiab.com/projects/porsche-llm-routing)

An internal AI tool I built at Porsche Digital. It is an intelligent routing
layer that uses an on-device LLM to analyze each prompt's complexity and task
type, then sends it to a local model or a cloud provider.

- The routing decision itself runs entirely on local inference.
- By my own operational estimate, about 65% of requests stayed local and cloud
  AI spend fell by about 45%. These are self-reported figures, not a controlled
  finance study.
- Designed to be extended as new local and cloud models become available.

Best fit: AI engineering, LLM systems, AI infrastructure, cost optimization.

### [Agent Operations Dashboard](https://zaiddiab.com/projects/agent-operations-dashboard)

A private, owner-only control surface for project health, GitHub issues and PRs,
tasks, bounded Codex agent telemetry, alerts, and analytics.

- Next.js and TypeScript on Vercel, with Supabase state, WebAuthn passkeys, and
  an MCP worker on Cloudflare.
- Local agent summaries arrive through an authenticated outbound Windows
  service, so workstation access and sync credentials never reach the browser.

Best fit: AI platform engineering, developer tooling, full-stack.

### [Vehicle Software Infrastructure](https://zaiddiab.com/projects/porsche-ci-cd-ota)

CI/CD and OTA infrastructure for containerized services on embedded Linux at
Porsche Digital.

- CI/CD pipelines for Dockerized C++ and Python services across ARM and x86
  targets.
- A REST-based OTA update mechanism in Rust, which I taught myself on the job.
  It ran on three test vehicles with version checks, fallback logic, health
  monitoring, and service orchestration.

Best fit: DevOps, platform engineering, embedded Linux, automotive software.

### [Edge AI Computer Vision Prototype](https://zaiddiab.com/projects/porsche-edge-ai-cv)

A real-time dashcam perception pipeline that runs entirely on embedded edge
hardware: a GStreamer pipeline with YOLO detection, producing video overlays and
per-frame metadata that drove ambient light hazard feedback.

Best fit: computer vision, edge AI, automotive perception, robotics.

## Project Matrix

| Project | Stack / Domain | What it shows |
| --- | --- | --- |
| [EFQM/RADAR AI Report Analyzer](https://zaiddiab.com/projects/efqm-radar-rag) | LangGraph, RAG, Qdrant, Ollama, FastAPI, Pydantic | Multi-agent RAG with evidence grounding and team leadership |
| [LLM Routing System](https://zaiddiab.com/projects/porsche-llm-routing) | Local LLM inference, Python, routing logic | Cost-aware hybrid local/cloud AI |
| [Agent Operations Dashboard](https://zaiddiab.com/projects/agent-operations-dashboard) | Next.js, TypeScript, Supabase, WebAuthn, MCP | Tooling for operating AI agents |
| [Vehicle Software Infrastructure](https://zaiddiab.com/projects/porsche-ci-cd-ota) | CI/CD, embedded Linux, Rust OTA, Docker | Production-adjacent platform work on real targets |
| [Edge AI Computer Vision Prototype](https://zaiddiab.com/projects/porsche-edge-ai-cv) | GStreamer, YOLO, embedded Linux | Real-time perception on edge hardware |
| [Internal Technical Evaluation](https://zaiddiab.com/projects/porsche-nda-eval) | LLM and hardware benchmarking, reporting | Comparing 10+ AI approaches under uncertainty |
| [EUNO Mood Tracker](https://zaiddiab.com/projects/euno-mood-tracker) | Random Forest, SMOTE, FastAPI, Flutter | End-to-end ML product (~87% accuracy) |
| [Yoga Studio Management Platform](https://zaiddiab.com/projects/yoga-studio-platform) | Flutter, React.js, ASP.NET Core, MySQL, RBAC | Deployed multi-client full-stack system |
| [Robotics System with YOLO + LiDAR](https://zaiddiab.com/projects/robotics-yolo-lidar) | YOLO, LiDAR, mapping, path planning | Sensor fusion and autonomous navigation |
| [Retail Automation Prototype](https://zaiddiab.com/projects/retail-automation) | YOLO, camera systems, robotic arm | Closed-loop computer vision automation |
| [Kotlin Driver/Admin Mobile App](https://zaiddiab.com/projects/kotlin-driver-admin) | Kotlin, Firebase Realtime Database | Role-based mobile app with real-time sync |

## Stack

| Area | Tools and technologies |
| --- | --- |
| AI / ML & Agents | LLM agents, LangGraph, RAG, Qdrant, Ollama, local LLM inference, LLM routing, MCP, structured output (Pydantic), YOLO, computer vision |
| Backend & Systems | Python, FastAPI, C++, Rust, C#, ASP.NET Core, REST APIs |
| DevOps & Platforms | Docker, CI/CD, GitHub Actions, Linux, embedded Linux, systemd, Cloudflare, shell scripting, Git |
| Frontend / Mobile | Next.js, TypeScript, React.js, Flutter, Kotlin |
| Databases | SQLite, MySQL, Supabase/Postgres, Firebase Realtime Database |
| Daily environment | Linux, Windows, VS Code, Claude Code, ChatGPT Codex, GitHub Copilot, OpenSpec |

## Experience

### Porsche Digital GmbH - Intern, Vehicle Solutions & Data

October 2025 - August 2026, Ludwigsburg, Germany

I worked as a full member of a cross-functional Scrum team across AI, vehicle
software, and systems projects.

- Built an intelligent LLM routing layer that runs on local inference.
- Built CI/CD pipelines and a Rust OTA update mechanism for embedded Linux targets.
- Developed a real-time edge computer vision prototype.
- Benchmarked more than ten LLM approaches, AI tools, and hardware options for
  a confidential early-stage project.
- Recognized for high initiative, structured problem-solving, and clear
  technical communication.

### Javna Mobile Media & Technology Solutions - Backend Development Intern

June 2024 - July 2024, Amman, Jordan

- Developed RESTful APIs with ASP.NET Core, Entity Framework Core, and MySQL.
- Improved API performance through query tuning, caching, and refactoring.

## Education

| Program | Institution | Focus |
| --- | --- | --- |
| BSc Computer Science, 2021-2026 | German-Jordanian University, Amman | Artificial Intelligence |
| Exchange Semester, 2025 | Hochschule Trier, Germany | Robotics, computer vision, AI |

## Languages

| Language | Proficiency |
| --- | --- |
| Arabic | Native |
| English | C2 - proficient |
| German | B1+ working proficiency, improving toward B2 |

## Target Roles

1. AI Engineer / Applied AI Engineer / AI Agent Developer
2. Software Engineer / Software Developer
3. DevOps / Platform / CI/CD Engineer
4. Backend Engineer
5. Linux / Embedded Linux / Systems Engineer

Industries: AI automation and business workflows, automotive, industrial
automation and robotics, logistics software, IT consultancies, SaaS and startups.

## What Makes Me Different

I combine AI engineering with software engineering, DevOps, backend, and Linux
systems depth. I don't just write prompts. I build the agent workflows, retrieval
pipelines, routing layers, evaluation gates, APIs, and deployment paths that make
AI usable as production software.

## Reference Signal

Dr. Ahmad Barghash, my academic supervisor at the German-Jordanian University,
ranked me in the top 5% of graduation project students he has supervised and
recommended me for consultation positions. Additional professional references
are available on request.

## Contact

I'm open to full-time AI engineering and software roles, freelance work on AI
automation, agents, and RAG, and technical collaborations.

- Portfolio: <https://zaiddiab.com>
- Projects: <https://zaiddiab.com/projects>
- LinkedIn: <https://linkedin.com/in/zaiddiab>
- Email: <contact@zaiddiab.com>
- Resume: <https://zaiddiab.com/zaid-diab-cv.pdf>
