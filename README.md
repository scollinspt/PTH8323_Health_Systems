# PTH8323 Health Systems

Public course companion for **PTH8323 Health Systems**, a Plymouth State University Doctor of Physical Therapy course. The site is configured for publication at `https://scollinspt.github.io/PTH8323_Health_Systems/` with GitHub Pages and will support two primary learning experiences:

1. A **Project Studio** that helps students explore systems-level interests, identify broad project directions, and bring useful starting points into individual-versus-pair and project-formation discussions.
2. A **Scenario Review** experience with challenging, application-focused question sets for core NPTE-relevant topics that also align with this course.

The Fall 2026 syllabus is the authority for course and project expectations; Canvas and in-class instructions remain authoritative for current deadlines, submissions, grading, and changes.

## Current Release

The initial website foundation includes:

- A concise, responsive homepage that directs students to the site's two purposes
- A dedicated Project Studio route at `/project/`
- A separate detailed Project Framework route at `/project/framework/`
- An experience-first Project Ideas activity at `/project/ideas/`
- A downloadable plain-text discussion brief suitable for Canvas submission
- A dedicated Scenario Review route at `/review/`
- A PTH8323-specific visual system and connected health systems model
- A syllabus-grounded project framework, including proposal lanes, systems reasoning, causal networks, and micro-to-macro scope
- An accessibility and privacy baseline for future interactive work
- Automated GitHub Pages deployment through the official Astro action

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Course Context

PTH8323 examines physical therapy within healthcare systems, including practice management, community and public health, sustainability, and legislative and political advocacy. The course emphasizes the effects of healthcare delivery, policy, reimbursement, regulation, leadership, organizational change, population health, and professional responsibility on practice, access, and patient outcomes.

The website should help students practice systems thinking and evidence-informed professional decision making. It is a course companion, not a replacement for instruction, discussion, consultation, or feedback.

## Product Goals

### 1. Project Studio

The Project Studio supports the syllabus-defined **Leadership & Transformation Presentation Project**, a 40-point project completed individually or in pairs. The implemented first activity helps students prepare for project-formation discussion by examining experiences they already have: personal or family healthcare, observation or work before PT school, two full-time clinical rotations, and other educational, service, or community settings.

The first activity moves through five stages: experience source, the system pattern that made a situation memorable, possible system scale, the kind of work the student may want to explore, and inquiry planning. Inquiry planning includes contexts of interest, possible methods, and development forms. Pro bono practice, employment, coursework, and community experience are distinct sources; selecting another setting requires a non-identifying description.

The activity produces a private, browser-session discussion brief with causal-network questions that students can download and submit through Canvas for instructor review and project matching. Transparent static rules may show up to two connections to current project possibilities when a response aligns across at least three areas: experience source, system pattern, system scale, work the student wants to explore, context of interest, possible methods, and development forms. Every suggestion must align with question substance, inquiry approach, and at least one method or development choice. Context alignment receives additional weight so specific suggestions do not arise from method similarity alone. The explanation names the matching areas. It does not score students, declare a best match, assign a project, or approve a topic.

The Studio supports five related analysis and proposal pathways:

- Investigation or needs analysis
- Health policy analysis and advocacy
- Business or practice innovation
- Management, leadership, or program development
- Another systems-based healthcare analysis or proposal that would require instructor approval

Prompts may help students consider:

- The healthcare, community, organizational, or professional issue that interests them
- The population, setting, or stakeholders affected
- Relevant systems levers such as access, payment and reimbursement, regulation, organizational structure, workforce, quality, or policy
- The kind of change they want to examine: advocacy, innovation, implementation, improvement, sustainability, or transformation
- Their preferred contribution, professional interests, and openness to other directions
- Methods they may be willing to use, including qualitative, quantitative, mixed methods, evidence review, needs assessment, market analysis, financial analysis, and policy analysis
- Development forms such as a business plan, for-profit or nonprofit model, financial model, program evaluation, implementation plan, partnership model, or advocacy strategy
- Which external perspectives could challenge or strengthen the idea

Most projects will adapt a reasoning process already familiar to DPT students: diagnose the system, identify the problems or needs, determine a defensible approach to change, and use causal networks to anticipate intended effects, indirect effects, feedback, and possible unintended consequences. The process is familiar even when the system is not a patient.

Projects may operate from micro to macro: from one workplace policy, procedure, workflow, or team to an organization, market, profession, public policy, or healthcare system. Their focus may be social, organizational, operational, or strategic. Need assessment, outcomes or feasibility analysis, sustainability analysis, partnership analysis, policy review and advocacy, process redesign, program proposals, and business plans are all possible forms.

The shared project catalog currently contains 19 possibilities. Seven are concrete opportunities: pulmonary rehabilitation need in Plymouth with possible Speare Memorial Hospital collaboration; sustainable cash-based practice; rural postpartum physical therapy outcomes; shared PSU-Speare academic and clinical credentials; an athletic trainer-to-DPT entry pipeline supported by graduate-assistant-level athletic training work; an expanded Plymouth Senior Center relationship building from Dr. Crane's Tai Chi for Balance program; and Active Outdoor Wellness with Adventure Education. Twelve broader question families cover service gaps, population health, care pathways, practice sustainability, program evaluation, workforce development, academic-clinical partnerships, technology, policy, implementation, social enterprise, and quality improvement. Concrete opportunities are possibilities rather than assigned topics, and partner opportunities require current instructor confirmation.

The result should be framed as **possible directions to discuss**, not a selected topic or approved proposal. The implemented output records experience sources, systems patterns, possible scale, approaches worth exploring, contexts of interest, methods, development forms, transparent project connections, and causal questions. Students can copy it or download a dated plain-text file for Canvas submission.

The Studio must not:

- Assign a topic, partner, group, or role
- Rank students or determine compatibility
- Approve a proposal or predict a grade
- Write the analysis, strategy, solution, presentation, or defense
- Invent evidence, stakeholder input, or professional consultation
- Imply that every project must address every possible systems factor

Later project-planning prompts may help students check their developing idea against confirmed syllabus expectations: problem or need analysis; relevant systems, reimbursement, regulation, organizational, and stakeholder effects; leadership and change-management concepts; a causal network and anticipated consequences; an interprofessional perspective; sustainability and implementation considerations; and professional presentation and defense. Students must obtain and incorporate input from both a professional outside physical therapy and a licensed physical therapist external to the course instructional team. The Studio can surface these requirements but cannot satisfy them for the student.

### 2. Scenario Review

The review experience will use difficult, realistic scenarios that ask students to interpret a healthcare situation and choose or defend the most supportable action. Initial content domains should include:

- Healthcare delivery systems and access to care
- Payment, insurance, reimbursement, Medicare, and Medicaid
- Regulation, policy, and advocacy
- Leadership, management, and organizational change
- Quality improvement, sustainability, and systems analysis
- Population health, ethics, and social responsibility
- Interprofessional and intraprofessional practice
- Practice management and contemporary issues affecting physical therapy

Question sets should emphasize application and integration rather than isolated recall. Feedback should explain why the best response fits, why plausible alternatives are limited, and which details in the scenario control the decision. Cases should represent appropriate professional boundaries and avoid patient-specific clinical decision support.

Any claim of NPTE alignment must be checked against the current public NPTE content outline and the course curriculum before release. The site is an independent study aid and must not imply endorsement by or affiliation with the Federation of State Boards of Physical Therapy.

## Website Patterns Referenced From PE3565

The PE3565 Assessment Lab is a useful **read-only reference for website setup and implementation**, not a template to duplicate. No instructional content, course concepts, or lessons transfer from PE3565 to PTH8323. This project may reuse proven technical and interface patterns while developing its own course model, content, interaction design, and visual identity.

Website patterns worth referencing:

- Astro for a fast static site and GitHub Pages deployment
- React islands for interactive learning tools
- Structured TypeScript data separated from presentation components
- A deterministic, testable, and explainable matcher rather than generative topic selection
- One-step-at-a-time prompts with backward navigation, revision, and optional responses
- Explicit boundaries between exploration, project approval, grading, and instructor feedback
- Copy and print/save outputs that support an offline classroom handoff
- Browser-only temporary state for Project Studio work, with clear reset and data-loss controls
- No server collection of student responses, project ideas, answers, or identifying information
- Keyboard access, visible focus, mobile and zoom support, non-color status cues, and reduced-motion support
- Automated tests for matching rules and a production build check before deployment

Course-specific boundaries:

- PTH8323 is about healthcare systems, leadership, policy, management, advocacy, and transformation rather than measurement and assessment.
- Its major project is one integrated Leadership & Transformation presentation completed individually or in pairs, not a three-phase assessment investigation.
- Project matching must use systems-level issues, change pathways, and stakeholder considerations; PE3565 pathways, questions, scoring rules, and project directions must not be copied.
- Scenario review should have a professional, case-conference feel appropriate to terminal DPT students and should not inherit PE3565's XP or pathway model without a separate pedagogical reason.

## Privacy And Content Boundaries

The workspace has three distinct roles:

- **This repository** is the only location where the PTH8323 website will be developed.
- The instructor's **USNH OneDrive course folder** is private source material. Files there are not copied into the public repository by default.
- The **PE3565 repository** is read-only and may be inspected only for website architecture and implementation patterns.

The public repository may contain newly authored formative explanations, scenarios, parallel practice questions, and feedback. It must not contain secure quiz or final-exam questions, answer keys, question-level derivatives, private student information, or the complete syllabus. The syllabus includes course-administration and contact information and should be summarized selectively rather than published wholesale.

## Planned Technical Direction

The likely implementation will follow the proven PE3565 deployment shape:

- Astro static output configured with the repository base path
- Astro and TypeScript for focused interactions; React islands only where later complexity justifies them
- Data-driven content modules for prompts, matching rules, cases, answer options, and feedback
- `sessionStorage` for temporary Project Studio drafts
- Optional browser-local review progress only if it provides a clear learning benefit, with an obvious reset control and disclosure that it is not an official course record
- The official Astro GitHub Action for GitHub Pages deployment
- No application server, account system, grades, or response submission

The visual system should be designed for PTH8323 rather than reskinning PE3565. It should feel professional, systems-oriented, readable, and suitable for repeated classroom use.

## Initial Release Criteria

The first useful release should allow a student to:

- Explore interests without being assigned a project direction
- Receive multiple broad, syllabus-aligned directions through transparent static rules
- Revise responses and intentionally continue with uncertainty
- Copy a concise discussion brief or download it for Canvas submission
- Work through at least one reviewed scenario set with explanatory feedback and retries
- Use all core interactions with keyboard, touch, mobile layout, and browser zoom
- Understand what data stays in the browser and what the site does not collect
- Distinguish public formative practice from official course requirements and graded assessments

Instructor review should confirm syllabus fidelity, current NPTE relevance, professional authenticity, accessibility, and separation from secure assessments before public release.
