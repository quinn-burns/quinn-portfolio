import type { CaseStudy } from "@/lib/case-study-types";
import type { Media } from "@/lib/types";

/**
 * AeroSense case study.
 *
 * Copy: Quinn's case study text, lightly tightened. Supporting facts come only
 * from the team's own Deliver presentation (Figma, "Final Deliver Presentation").
 * Anything starting with "TK" is still to be confirmed and renders as a marked
 * placeholder.
 *
 * Images: exported from the AeroSense Figma file into /public/work/aerosense.
 * No photos of real children or families are used until their source and
 * permission to publish are confirmed.
 */

const A = "/work/aerosense/";

/** Quinn’s live AeroSense prototype; `device` and `state` open a specific screen. */
const DEMO = "https://aerosense-psi.vercel.app/";
const live = (device: string, state = "normal") => `${DEMO}?device=${device}&state=${state}`;

/** Local image helper. */
const img = (file: string, alt: string, width: number, height: number, extra: Partial<Extract<Media, { kind: "image" }>> = {}): Media => ({
  kind: "image",
  src: A + file,
  alt,
  width,
  height,
  ...extra,
});

/** Labelled stand-in for an asset we still need. */
const need = (label: string, spec: string, width = 1600, height = 1000): Media => ({
  kind: "placeholder",
  label,
  spec,
  width,
  height,
});

export const aerosense: CaseStudy = {
  slug: "aerosense",
  title: "AeroSense",
  headline: "Connected Care in Motion.",
  intro:
    "AeroSense is a connected pediatric ventilation concept that integrates biometric monitoring, portable ventilation, and digital interfaces into one cohesive care system.",
  heroMedia: img("hero.jpg", "The AeroSync portable ventilator on a warm backdrop: a cream housing with blue handles and dial, a live ventilation screen, a padded blue shoulder strap and breathing circuit, and the HALO sensing band laid in front.", 1536, 1024),
  heroRatio: 3 / 2,
  facts: [
    { label: "Context", value: "Health Design Studio, Georgia Tech" },
    { label: "Partner", value: "Children’s Healthcare of Atlanta" },
    { label: "Team", value: "Quinn Burns, Yasmin Younis" },
    { label: "Timeline", value: "Fall 2026" },
  ],
  disclaimer:
    "AeroSense is a student design concept, not a medical device or a commercially available product. Its biometric monitoring capabilities are proposed, its prototypes are exploratory, and nothing has been clinically validated. Readings shown are simulated.",

  chapters: [
    /* ───────────── 01 · Overview ───────────── */
    {
      id: "overview",
      label: "Overview",
      blocks: [
        {
          type: "statement",
          label: "Beyond the Breath",
          headline: "For children who depend on mechanical ventilation at home, care extends far beyond the ventilator itself.",
          body:
            "Families manage an entire system of respiratory equipment, monitoring devices, and emergency supplies, all while caring for their child.\n\nAeroSense combines HALO, a sensor-integrated tracheostomy tie designed for biometric monitoring, with AeroSync, a portable ventilator, and connected digital interfaces. HALO’s readings (heart rate, blood oxygen saturation, movement, and airway sounds) sit alongside AeroSync’s ventilation data, so caregivers can see both in one place.\n\nTogether, HALO and AeroSync explore how biometric and ventilation monitoring could give caregivers a clearer picture of their child’s condition.",
        },
        {
          type: "film",
          title: "Beyond the Breath",
          poster: img("film-poster.jpg", "Concept render from the film: a parent leans over a crib to a toddler wearing HALO, with AeroSync and a docked phone on the nightstand.", 1920, 1080),
          src: "/work/aerosense/beyond-the-breath.mp4",
          caption: "AeroSense promotional film, 1:30. Concept renders and simulated interfaces.",
        },
        {
          type: "image",
          size: "wide",
          ratio: 3 / 2,
          media: img("aerosync-four-views.jpg", "Four views of the AeroSync ventilator with its carry handle: front three-quarter, rear three-quarter, side and back.", 2400, 1600),
          caption: "AeroSync, four views.",
        },
      ],
    },

    /* ───────────── 02 · Research ───────────── */
    {
      id: "research",
      label: "Research",
      blocks: [
        {
          type: "split",
          label: "Research",
          headline: "One child. Multiple devices. Constant coordination.",
          body:
            "Working with Children’s Healthcare of Atlanta, we observed pediatric respiratory care and spoke with respiratory therapists and caregivers to understand how families manage it day to day.",
        },
        {
          type: "mediaText",
          side: "left",
          ratio: 1840 / 2160,
          media: img("research-equipment.jpg", "An infant in a car seat on a tracheostomy circuit, surrounded by the equipment that travels with him: a portable ventilator in its bag, an oxygen cylinder, a suction unit and catheters, a pulse oximeter, a resuscitation bag, and supply boxes.", 1840, 2160),
          label: "One care system, many parts",
          headline: "Respiratory support, monitoring, and everyday care each come with their own equipment, power, and supplies.",
          caption: "Ventilation, oxygen, suction, monitoring, and emergency supplies all travel with the child. Reference image found via Google Images; original source not yet identified.",
        },
        {
          type: "sequence",
          label: "The caregiver is the integration layer",
          steps: [
            { title: "Interpreting information", body: "Reading device data alongside the child’s behavior." },
            { title: "Providing care", body: "Managing daily needs and responding to changes." },
            { title: "Managing equipment", body: "Coordinating separate devices, supplies, and connections." },
          ],
        },
        {
          type: "sequence",
          label: "Moving the child means moving the entire care system",
          numbered: true,
          steps: [
            { title: "Respiratory equipment" },
            { title: "Emergency supplies" },
            { title: "Mobility equipment" },
            { title: "Finally, the child" },
          ],
        },
        {
          type: "statement",
          size: "large",
          headline: "The challenge wasn’t simply monitoring breathing. It was maintaining awareness of the child and the entire care system.",
        },
      ],
    },

    /* ───────────── 03 · Discovery ───────────── */
    {
      id: "discovery",
      label: "Discovery",
      blocks: [
        {
          type: "statement",
          label: "From the field",
          size: "large",
          headline: "“She was squirming more than usual.”",
          body: "In one caregiver’s account, a father noticed that change in his daughter and discovered her trach had become displaced. Not every change in a child’s condition triggers a ventilator alarm.",
        },
        {
          type: "statement",
          label: "Discovery",
          headline: "Two needs. One connected opportunity.",
        },
        {
          type: "sequence",
          numbered: true,
          steps: [
            {
              title: "Biometric awareness",
              body: "Ventilator readings describe respiratory support, not the child’s broader condition. Caregivers rely on separate monitors, observation, and their familiarity with the child to notice changes that need attention.",
            },
            {
              title: "Connected care in motion",
              body: "Moving a ventilator-dependent child means coordinating devices, tubes, power, and supplies. Keeping care continuous through those transitions is physically and mentally demanding.",
            },
          ],
        },
        {
          type: "image",
          pan: 760,
          size: "wide",
          ratio: 1920 / 1080,
          media: img("white-space-map.jpg", "Positioning map titled Where understanding meets movement: ventilators sit low on understanding of the child, monitors sit low on movement, and the family-assembled care system sits in the middle, leaving the upper-right quadrant, connected care in motion, open.", 1920, 1080),
          caption: "White-space map. Placements are qualitative and relative, not measured product scores.",
        },
        {
          type: "statement",
          size: "large",
          headline: "How might we help caregivers keep a clearer understanding of their child’s condition while making respiratory care easier to manage on the move?",
        },
        {
          type: "image",
          pan: 900,
          size: "wide",
          ratio: 1780 / 635,
          media: img("concept-exploration.jpg", "Twenty early concept sketches grouped into five directions: monitoring, wearables, connected care, mobility, and organization.", 1780, 635),
          caption: "Twenty initial concepts across five directions.",
        },
        {
          type: "split",
          label: "Concept selection",
          headline: "AeroSense emerged as the strongest overall direction.",
          body: "Seven of the twenty concepts advanced, and three finalists were scored against seven criteria, with the two primary ones weighted three times: awareness of the child’s condition and movement workload.\n\nSynapse put sensing inside the ventilator and scored 7 on both. Roam made transport easier (9) but did little for awareness (5). AeroSense scored 9 on both by splitting the work between a wearable sensor and a portable ventilator, for a weighted total of 117 out of 140, against 102 and 103.",
        },
        {
          type: "image",
          pan: 900,
          size: "wide",
          ratio: 1740 / 635,
          media: img("concept-evaluation.jpg", "Three finalist concepts compared: Synapse, AeroSense, and Roam, with scores for awareness of the child’s condition and movement workload. AeroSense is marked selected.", 1740, 635),
          caption: "Scores reflect a provisional design assessment, not validated performance.",
        },
      ],
    },

    /* ───────────── 04 · Design ───────────── */
    {
      id: "design",
      label: "Design",
      blocks: [
        {
          type: "statement",
          label: "Design",
          headline: "A connected approach to pediatric ventilation.",
          body:
            "Each part of the system covers a different moment in the caregiver’s day: HALO on the child, AeroSync on the move, and the interfaces wherever the caregiver is.",
        },
        {
          type: "image",
          size: "wide",
          ratio: 2200 / 1468,
          media: img("aerosync-docked.jpg", "AeroSync with a caregiver’s phone docked on top showing the child’s readings, and the shoulder strap attached.", 2200, 1468),
        },

        // — HALO —
        { type: "subsection", id: "halo", name: "HALO", kicker: "Biometric monitoring beyond the breath" },
        {
          type: "annotated",
          ratio: 2171 / 724,
          media: img("halo-flat.jpg", "The HALO tracheostomy tie laid flat: a light-blue textile band with two white sensor pods.", 2171, 724),
          notes: [
            { x: 32.5, y: 30, title: "Removable sensor pods", body: "Designed to monitor heart rate, blood oxygen saturation (SpO₂), movement, and airway sounds. Proposed capabilities, not validated measurements." },
            { x: 49.5, y: 47, title: "Breathable textile tie", body: "Soft materials against the child’s skin." },
            { x: 61.5, y: 30, title: "Rechargeable", body: "Pods detach from the tie to charge." },
          ],
        },
        {
          type: "mediaText",
          side: "left",
          ratio: 1671 / 941,
          media: img("halo-pods.jpg", "HALO pod sequence: a pod removed from the tie, both pods in a charging cradle, and a pod sliding back into its mount.", 1671, 941),
          headline: "Biometric monitoring, built into something the child already wears every day.",
          body: "HALO reimagines the tracheostomy tie, integrating biometric sensors into soft, breathable materials. The pods slide out of the tie for charging, so the textile can be kept clean.",
          caption: "Concept renders.",
        },

        // — AeroSync —
        { type: "subsection", id: "aerosync", name: "AeroSync", kicker: "Ventilation designed for mobility" },
        {
          type: "image",
          size: "bleed",
          ratio: 2096 / 1474,
          media: img("aerosync-strap.jpg", "AeroSync with its padded cross-body strap, breathing circuit connected, display showing ventilation readings.", 2096, 1474),
        },
        {
          type: "mediaText",
          side: "right",
          ratio: 2250 / 1266,
          media: img("aerosync-docked-critical.jpg", "AeroSync in a high-priority alarm state, with the docked phone showing the alarm and an option to open emergency response.", 2250, 1266),
          headline: "One device, two interfaces.",
          body: "AeroSync combines essential ventilation monitoring with a compact form and an integrated carrying strap. A caregiver’s phone works on its own for remote monitoring, or docks on the ventilator for a larger, combined view of the child and the ventilation.",
          caption: "Proposed alarm state, shown with simulated data.",
        },
        {
          type: "gallery",
          ratios: [2400 / 1446, 2400 / 1803],
          items: [
            { media: img("aerosync-exploded.jpg", "Exploded view of AeroSync: housing, handle, blower, circuit boards, battery, and display assembly.", 2400, 1446), caption: "Internal architecture, exploded." },
            { media: img("aerosync-dimensions.jpg", "Dimensioned orthographic drawing of AeroSync, 8 by 7 by 3.5 inches.", 2400, 1803), caption: "Proposed envelope: 8 × 7 × 3.5 in." },
          ],
        },
        {
          type: "gallery",
          ratios: [461 / 297, 461 / 297, 461 / 297, 461 / 297],
          items: [
            { media: img("cmf-textile.jpg", "Close-up of a breathable spacer-knit textile.", 461, 297), caption: "Breathable spacer-knit textile" },
            { media: img("cmf-pod.jpg", "Close-up of a HALO sensor pod set into the textile.", 461, 297), caption: "Soft silicone sensor interface" },
            { media: img("cmf-housing.jpg", "Close-up of the matte ventilator housing edge.", 461, 297), caption: "Matte polymer housing" },
            { media: img("cmf-controls.jpg", "Close-up of the elastomeric keys and textured knob.", 461, 297), caption: "Elastomeric keys, textured knob" },
          ],
        },
        {
          type: "statement",
          headline: "Soft where it touches the child, durable where caregivers interact.",
        },

        // — Connected interfaces —
        {
          type: "subsection",
          id: "interfaces",
          name: "Connected interfaces",
          kicker: "Information where it’s needed",
          intro: "Across the caregiver’s phone, watch, ventilator, and a clinician portal, AeroSense brings biometric and ventilation data together in role-specific experiences. All readings shown are simulated.",
        },
        {
          type: "image",
          size: "wide",
          ratio: 16 / 9,
          media: {
            kind: "video",
            src: A + "interfaces-system.mp4",
            poster: A + "interfaces-system-poster.jpg",
            alt: "The connected system assembles: the AeroSync ventilator display, then the caregiver phone, the clinician portal, and the watch, linked together.",
            width: 1920,
            height: 1080,
            loop: false,
          },
          caption: "AeroSync ventilator, caregiver phone, watch, and clinician portal. Simulated data.",
        },
        {
          type: "devices",
          label: "Docked",
          headline: "In hand for remote monitoring. Docked for the combined view.",
          items: [
            { device: "phone-landscape", media: img("ui-docked-normal.png", "Caregiver app in landscape, docked on AeroSync, showing oxygen, heart rate, and breathing rate side by side.", 844, 390), caption: "Landscape · docked on AeroSync" },
          ],
        },
        {
          type: "devices",
          label: "Alert states",
          headline: "Monitor, investigate, respond.",
          items: [
            { device: "phone", media: img("ui-phone-normal.png", "Normal state: no active alerts.", 390, 844), caption: "Normal" },
            { device: "phone", media: img("ui-phone-attention.png", "Attention state: HALO notice that airway sounds changed, labelled as concept sensing, not a diagnosis or a validated measurement.", 390, 844), caption: "Attention · HALO notice" },
            { device: "phone", media: img("ui-phone-critical.png", "Critical state: high-priority ventilator alarm for high airway pressure with a button to open emergency steps.", 390, 844), caption: "Critical · ventilator alarm" },
          ],
        },
        {
          type: "devices",
          items: [
            { device: "watch", media: img("ui-watch-normal.png", "Watch, normal state.", 373, 439), caption: "Monitor" },
            { device: "watch", media: img("ui-watch-attention.png", "Watch, attention state: airway sounds changed.", 373, 439), caption: "Investigate" },
            { device: "watch", media: img("ui-watch-critical.png", "Watch, critical state: high airway pressure, manage alarm at AeroSync.", 373, 439), caption: "Respond" },
          ],
        },
        {
          type: "split",
          label: "Alarms and guidance",
          headline: "Alarms stay with the ventilator. Guidance travels with the caregiver.",
          body: "Silencing and resetting happen only at AeroSync. The phone and watch mirror the alert and can open step-by-step guidance from the child’s emergency care plan.",
        },
        {
          type: "devices",
          items: [
            { device: "screen", media: img("ui-vent-critical.png", "Ventilator display during a high-priority high airway pressure alarm, with the affected values highlighted.", 960, 480), caption: "Ventilator · high-priority alarm" },
          ],
        },
        {
          type: "mediaText",
          side: "left",
          ratio: 1440 / 900,
          media: img("ui-clinician.png", "Clinician portal: a respiratory monitoring summary, combined HALO and ventilator trends overnight, and events requiring review.", 1440, 900),
          label: "Clinician portal",
          headline: "Trends and events, reviewed remotely.",
          body: "Clinicians could review combined HALO and ventilator trends and events requiring attention, and manage settings within an appropriately validated clinical system.",
          caption: "Simulated data.",
        },
        {
          type: "interactive",
          title: "AeroSense interactive prototype",
          src: live("docked"),
          poster: img("prototype-preview.jpg", "The AeroSense interactive prototype site: device tabs for phone, docked, ventilator, watch, and portal, showing the caregiver phone docked on the AeroSync ventilator display.", 1600, 1000),
          ratio: 16 / 10,
          caption: "The working prototype, with simulated data. Switch between phone, docked, ventilator, watch, and clinician portal, and step through normal, attention, and alarm states.",
        },
      ],
    },

    /* ───────────── 05 · Prototyping ───────────── */
    {
      id: "prototyping",
      label: "Prototyping",
      blocks: [
        {
          type: "split",
          label: "Prototyping",
          headline: "Making the concept tangible.",
          body:
            "We explored AeroSense through physical models, electronics prototypes, CAD development, and interactive interface simulations.\n\nFor HALO, iterative 3D-printed models helped refine the sensor pod geometry, the attachment mechanism, and integration with the fabric tie. A working electronics prototype let us explore sensor inputs and demonstrate a simplified set of monitoring states.",
        },
        {
          type: "gallery",
          ratios: [4 / 5, 4 / 5, 4 / 5, 4 / 5],
          items: [
            { media: img("proto-halo-model.jpg", "HALO looks-like model on a white background.", 159, 479, { fit: "contain" }), caption: "Form · HALO looks-like model · in progress" },
            { media: img("proto-sensing.jpg", "HALO sensing prototype: a microcontroller board, breadboard, and sensor modules wired together.", 362, 492), caption: "Fit · HALO sensing prototype · working prototype" },
            { media: img("aerosync-dimensions.jpg", "AeroSync CAD drawing.", 2400, 1803, { fit: "contain" }), caption: "Feasibility · AeroSync CAD · proposed" },
            { media: img("ui-vent-normal.png", "Ventilator interface prototype.", 960, 480, { fit: "contain" }), caption: "Interaction · interactive interface prototype" },
          ],
        },
        {
          type: "sequence",
          label: "Design evolution",
          headline: "Shaped by caregiver and clinical feedback.",
          steps: [
            { title: "AeroSync — more information, easier to read", body: "Key respiratory data at a glance." },
            { title: "HALO — three pods to two", body: "A lower-profile design with removable sensors." },
            { title: "Caregiver app — actionable alarms", body: "Clearer urgency and next steps." },
          ],
        },
        {
          type: "statement",
          headline: "In parallel, we developed AeroSync’s physical form and interactive interfaces to explore how caregivers access information, respond to alerts, and follow emergency guidance.",
          body: "Together, these prototypes let us examine key interactions while identifying what still needs engineering and clinical validation.",
        },
      ],
    },

    /* ───────────── 06 · Reflection ───────────── */
    {
      id: "reflection",
      label: "Reflection",
      blocks: [
        {
          type: "statement",
          label: "Reflection",
          size: "large",
          headline: "Designing beyond the device.",
          body:
            "Much of the work came down to deciding where each piece of information belongs: alarms stay at the ventilator, guidance travels with the caregiver, and trends go to clinicians for review.\n\nFurther development would require validating sensor performance, clinical safety, alarm behavior, and the usability of the connected system with caregivers and healthcare professionals.",
        },
        {
          type: "image",
          size: "bleed",
          ratio: 1445 / 1088,
          media: img("carried.jpg", "Concept render: a parent carries a smiling toddler wearing HALO, with AeroSync on a shoulder strap and a phone in hand.", 1445, 1088),
          caption: "Concept render from an earlier iteration of the system.",
        },
        {
          type: "credits",
          groups: [
            { label: "Team Qyra", lines: ["Quinn Burns", "Yasmin Younis"] },
            { label: "With", lines: ["Children’s Healthcare of Atlanta", "Health Design Studio, Georgia Tech"] },
          ],
        },
      ],
    },
  ],

  next: "melo",
  seoDescription:
    "AeroSense — a connected pediatric ventilation concept that integrates biometric monitoring, portable ventilation, and digital interfaces into one cohesive care system. A student design concept from Georgia Tech’s Health Design Studio with Children’s Healthcare of Atlanta.",
};
