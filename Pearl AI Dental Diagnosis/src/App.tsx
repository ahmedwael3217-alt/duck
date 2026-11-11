import { useEffect, useMemo, useState } from "react";
import bitewingClean from "./assets/bitewing-clean.png";
import pearlFinding from "./assets/pearl-finding.png";
import dentalXrayMonitor from "./assets/photos/dental-xray-monitor.jpg";
import dentistReviewingXrays from "./assets/photos/dentist-reviewing-xrays.jpg";

type Note = {
  visual: string;
  explain: string;
  science: string;
  source: string;
  duration: string;
  transition: string;
  speaker?: string;
};

type Slide = {
  act: string;
  title: string;
  kicker: string;
  className?: string;
  note: Note;
  content: React.ReactNode;
};

const A = "/assets/";

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={direction === "left" ? "flip" : ""}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Mark({ children, tone = "coral" }: { children: React.ReactNode; tone?: string }) {
  return <span className={`mark mark-${tone}`}>{children}</span>;
}

function Source({ children }: { children: React.ReactNode }) {
  return <div className="source">{children}</div>;
}

function ToothIcon() {
  return (
    <svg className="tooth-icon" viewBox="0 0 80 90" aria-hidden="true">
      <path d="M15 12C25 2 34 9 40 9s15-7 25 3c13 13 5 31 0 43-5 13-9 29-17 27-7-1-4-20-8-20s-1 19-8 20c-8 2-12-14-17-27-5-12-13-30 0-43Z" />
      <path d="M25 24c9 6 21 6 30 0" />
    </svg>
  );
}

const notes = (
  visual: string,
  explain: string,
  science: string,
  source: string,
  duration: string,
  transition: string,
  speaker?: string,
): Note => ({ visual, explain, science, source, duration, transition, speaker });

export default function App() {
  const [index, setIndex] = useState(() => {
    const requested = Number(new URLSearchParams(window.location.search).get("slide"));
    return Number.isFinite(requested) ? Math.max(0, Math.min(15, requested - 1)) : 0;
  });
  const [overview, setOverview] = useState(false);
  const [help, setHelp] = useState(false);

  const slides = useMemo<Slide[]>(
    () => [
      {
        act: "ACT I · THE CLINICAL PROBLEM",
        kicker: "01 · THE INVISIBLE PROBLEM",
        title: "Can AI See What the Human Eye Misses?",
        className: "s1",
        note: notes(
          "A real Pearl interface image emerges from a clinical-white field; one detection remains isolated.",
          "Open with the perceptual problem: radiographs compress complex anatomy into shades of grey. Pearl Second Opinion is positioned as a second reader—not an autonomous diagnostician.",
          "Radiographic interpretation is pattern recognition under uncertainty. The software marks candidate regions; the finding still requires clinical correlation.",
          "Pearl Second Opinion User Guide; FDA K210365.",
          "0:25",
          "The radiograph enlarges into the clinical problem on slide 2.",
          "Speaker 1",
        ),
        content: (
          <div className="opening-grid">
            <div className="opening-copy">
              <div className="eyebrow">PEARL SECOND OPINION</div>
              <h1>
                Can AI see what the <em>human eye</em> misses?
              </h1>
              <p className="lede">AI-powered dental radiographic diagnosis, put on trial.</p>
              <div className="institution">
                The British University in Egypt · AI Basics for Dentistry
              </div>
            </div>
            <div className="radiograph-portal">
              <img
                src={`${A}pearl-finding.png`}
                alt="Pearl Second Opinion interface showing a highlighted finding on a dental radiograph"
              />
              <div className="scanline" />
              <div className="portal-label">
                <i /> Authentic Pearl interface
              </div>
            </div>
          </div>
        ),
      },
      {
        act: "ACT I · THE CLINICAL PROBLEM",
        kicker: "02 · THE CLINICAL PROBLEM",
        title: "The radiograph is clear. The answer may not be.",
        className: "s2",
        note: notes(
          "A bitewing is surrounded by four interpretation pressures; a coral target identifies a subtle proximal region.",
          "Explain why readings vary: low contrast, superimposition, exposure and positioning differences, plus human attention and experience.",
          "AI may add consistency, but image quality and anatomy still constrain both human and algorithmic interpretation.",
          "BUE Lecture 3; Pearl User Guide; Ibraheem et al., Diagnostics 2025.",
          "0:30",
          "Move from the problem to the tool designed as a second reader.",
          "Speaker 1",
        ),
        content: (
          <div className="problem-layout">
            <div className="problem-image">
              <img
                src={`${A}bitewing-clean.png`}
                alt="De-identified bitewing radiograph from Pearl user guide"
              />
              <span className="target-ring" />
              <div className="image-credit">De-identified image · Pearl User Guide</div>
            </div>
            <div className="problem-copy">
              <h2>
                The radiograph is clear.
                <br />
                <em>The answer may not be.</em>
              </h2>
              <div className="pressure-list">
                <div>
                  <b>01</b>
                  <span>
                    <strong>Subtle lesions</strong>Small density changes can be difficult to
                    localise.
                  </span>
                </div>
                <div>
                  <b>02</b>
                  <span>
                    <strong>Overlapping anatomy</strong>Structures can conceal or imitate disease.
                  </span>
                </div>
                <div>
                  <b>03</b>
                  <span>
                    <strong>Variable acquisition</strong>Exposure, angulation and noise alter
                    visibility.
                  </span>
                </div>
                <div>
                  <b>04</b>
                  <span>
                    <strong>Human variability</strong>Experience, fatigue and attention affect
                    readings.
                  </span>
                </div>
              </div>
              <p className="who">
                Potential beneficiaries: dentists, dental teams and patients—<b>if</b> the output is
                checked in context.
              </p>
            </div>
          </div>
        ),
      },
      {
        act: "ACT I · THE CLINICAL PROBLEM",
        kicker: "03 · MEET PEARL",
        title: "A second set of eyes, rendered in colour.",
        className: "s3",
        note: notes(
          "The official Pearl product image is the hero, with three concise identity statements.",
          "Introduce Pearl Inc. and Second Opinion as CADe software that processes radiographs and overlays suspected findings.",
          "The 2022 FDA summary calls it a second reader and describes an in-office client, cloud API and computer-vision models.",
          "FDA K210365, pp. 4–5; Pearl Second Opinion User Guide.",
          "0:30",
          "Ask what information can legitimately enter the system.",
          "Speaker 1",
        ),
        content: (
          <div className="meet-layout">
            <div className="meet-copy">
              <span className="number-stamp">SECOND READER / 01</span>
              <h2>
                A second set of eyes,
                <br />
                <em>rendered in colour.</em>
              </h2>
              <p>
                Pearl Inc.’s <b>Second Opinion</b> is computer-aided detection software for dental
                radiographic review.
              </p>
              <div className="identity">
                <span>
                  <b>INPUT</b>Digital radiographs
                </span>
                <span>
                  <b>ACTION</b>Detect + mark regions
                </span>
                <span>
                  <b>ROLE</b>Decision support
                </span>
              </div>
              <div className="not-diagnosis">
                It draws attention. It does not make the final diagnosis.
              </div>
            </div>
            <div className="device-shot">
              <div className="pearl-word">
                pearl<sup>®</sup>
              </div>
              <img
                src={`${A}pearl-hero.png`}
                alt="Official Pearl Second Opinion interface shown on a monitor"
              />
              <div className="authentic-tag">Official product image · Pearl User Guide</div>
            </div>
          </div>
        ),
      },
      {
        act: "ACT I · THE CLINICAL PROBLEM",
        kicker: "04 · INPUT + SCOPE",
        title: "What goes into the system?",
        className: "s4",
        note: notes(
          "A disciplined matrix separates original clearance from later products; the authentic patient grid establishes workflow context.",
          "Stress the exact original scope: bitewing and periapical radiographs, permanent teeth, patients aged 12 years or older, used by dental health professionals.",
          "Current product family is broader, but later clearances are separate indications. Do not back-project CBCT capability into K210365.",
          "FDA K210365; K242600; K243989; FDA record K242522.",
          "0:35",
          "The input tiles become the four-stage processing pipeline.",
          "Speaker 2",
        ),
        content: (
          <div className="input-layout">
            <div className="input-head">
              <h2>What goes into the system?</h2>
              <p>Scope changes over time. The label matters.</p>
            </div>
            <div className="scope-table">
              <div className="scope-row header">
                <span>Product / clearance</span>
                <span>Imaging input</span>
                <span>Population + role</span>
              </div>
              <div className="scope-row original">
                <span>
                  <small>ORIGINAL · 2022</small>
                  <b>
                    Second Opinion
                    <br />
                    K210365
                  </b>
                </span>
                <span>
                  <b>Bitewing + periapical</b>Permanent teeth
                </span>
                <span>
                  <b>≥12 years</b>Second reader
                </span>
              </div>
              <div className="scope-row">
                <span>
                  <small>LATER · 2025</small>
                  <b>
                    PR contours
                    <br />
                    K242600
                  </b>
                </span>
                <span>
                  <b>Periapical</b>Polygonal PR contours
                </span>
                <span>
                  <b>≥12 years</b>Second reader
                </span>
              </div>
              <div className="scope-row">
                <span>
                  <small>LATER · 2025</small>
                  <b>
                    Second Opinion 3D
                    <br />
                    K243989
                  </b>
                </span>
                <span>
                  <b>Dental CBCT</b>Anatomy segmentation
                </span>
                <span>
                  <b>≥12 years</b>Concurrent + second reader
                </span>
              </div>
            </div>
            <div className="scope-visual">
              <img
                src={`${A}pearl-grid.png`}
                alt="Pearl interface showing a series of dental radiographs"
              />
              <span>Authentic workflow view</span>
            </div>
            <Source>
              Sources: FDA K210365 (2022), K242600 (2025), K243989 (2025). Later products ≠ original
              indication.
            </Source>
          </div>
        ),
      },
      {
        act: "ACT II · HOW THE TECHNOLOGY WORKS",
        kicker: "05 · PROCESSING PIPELINE",
        title: "From pixels to prompts for attention.",
        className: "s5",
        note: notes(
          "A custom vector pipeline moves left to right; each stage reveals sequentially.",
          "Walk through input, processing, learned pattern recognition and overlay output. Describe metadata returning to the interface.",
          "FDA documents describe computer vision, machine learning and cloud processing; they do not publicly expose proprietary architecture.",
          "FDA K210365, Device Description; BUE Lecture 3.",
          "0:32",
          "Zoom from the pipeline into the nested hierarchy of AI methods.",
          "Speaker 2",
        ),
        content: (
          <div className="pipeline-wrap">
            <div className="pipeline-photo">
              <img
                src={dentistReviewingXrays}
                alt="Dentist reviewing dental radiographs on an illuminated display"
              />
              <div className="pipeline-photo-caption">
                <span>CLINICAL CONTEXT</span>
                <b>Image interpretation begins—and ends—with a clinician.</b>
              </div>
              <small>Photo: Jonathan Borba / Unsplash</small>
            </div>
            <div className="pipeline-copy">
              <span className="eyebrow">A FOUR-STAGE VIEW</span>
              <h2>
                From pixels to <em>prompts for attention.</em>
              </h2>
              <p className="pipeline-intro">
                Real radiographs enter a cloud-connected workflow. The software returns visual cues;
                the dentist still interprets the case.
              </p>
              <div className="pipeline-steps">
                {[
                  [
                    "01",
                    "ACQUIRE",
                    "Clinic image",
                    dentalXrayMonitor,
                    "Dental X-ray on a clinic monitor",
                  ],
                  [
                    "02",
                    "PREPARE",
                    "Radiograph pixels",
                    bitewingClean,
                    "Dental bitewing radiograph",
                  ],
                  [
                    "03",
                    "ANALYSE",
                    "Learned patterns",
                    bitewingClean,
                    "Radiograph analysed for visual patterns",
                  ],
                  [
                    "04",
                    "DISPLAY",
                    "Clinical overlay",
                    pearlFinding,
                    "Official Pearl interface with an overlay",
                  ],
                ].map(([number, title, detail, image, alt], i) => (
                  <div
                    className="pipeline-step"
                    style={{ "--i": i } as React.CSSProperties}
                    key={number}
                  >
                    <div className={`pipeline-step-media media-${i + 1}`}>
                      <img src={image} alt={alt} />
                      <span>{number}</span>
                    </div>
                    <b>{title}</b>
                    <small>{detail}</small>
                  </div>
                ))}
              </div>
              <div className="established">
                <Mark tone="teal">ESTABLISHED</Mark> Computer vision + machine learning + graphical
                overlays.
              </div>
            </div>
            <Source>
              Sources: FDA K210365; Pearl User Guide. Photography: Unsplash. Workflow is an
              educational abstraction.
            </Source>
          </div>
        ),
      },
      {
        act: "ACT II · HOW THE TECHNOLOGY WORKS",
        kicker: "06 · THE INTELLIGENCE",
        title: "AI is the umbrella. CNNs are one way to read pixels.",
        className: "s6",
        note: notes(
          "A nested hierarchy is paired with a simplified convolutional flow.",
          "Define AI, ML, deep learning and neural networks in plain language. CNNs learn spatial features such as edges, textures and combinations of patterns.",
          "Pearl discloses neural-network-based computer vision, but not a proprietary layer-by-layer architecture. The CNN diagram is educational, not a claim about its exact model.",
          "FDA K210365, Technological Comparison; BUE Lecture 2.",
          "0:40",
          "If networks learn patterns, the next question is what examples and labels taught them.",
          "Speaker 2",
        ),
        content: (
          <div className="intelligence-layout">
            <div className="cnn-photo">
              <img src={dentalXrayMonitor} alt="Dental radiograph displayed on a clinic monitor" />
              <div className="cnn-photo-shade" />
              <div className="cnn-photo-copy">
                <span>THE REAL INPUT</span>
                <h3>
                  Anatomy rendered
                  <br />
                  in shades of grey.
                </h3>
                <p>Photo: Fr0ggy5 / Unsplash</p>
              </div>
            </div>
            <div className="cnn">
              <div className="cnn-title">
                <span>GENERAL EDUCATIONAL EXPLANATION</span>
                <h2>How a CNN reads an image</h2>
              </div>
              <div className="ai-breadcrumb" aria-label="Artificial intelligence hierarchy">
                <span>AI</span>
                <i />
                <span>Machine learning</span>
                <i />
                <span>Deep learning</span>
                <i />
                <b>Neural networks</b>
              </div>
              <div className="cnn-story">
                <article>
                  <div className="cnn-story-image">
                    <img src={bitewingClean} alt="Dental bitewing radiograph" />
                    <span>01</span>
                  </div>
                  <h3>Read pixels</h3>
                  <p>Filters scan local edges, textures and density changes.</p>
                </article>
                <article>
                  <div className="cnn-story-image detail-crops">
                    <img src={bitewingClean} alt="Magnified radiographic pattern crops" />
                    <i />
                    <i />
                    <span>02</span>
                  </div>
                  <h3>Combine patterns</h3>
                  <p>Deeper layers combine simple cues into candidate features.</p>
                </article>
                <article>
                  <div className="cnn-story-image output-view">
                    <img src={pearlFinding} alt="Official Pearl interface showing a finding" />
                    <span>03</span>
                  </div>
                  <h3>Localise a region</h3>
                  <p>The interface returns a cue—not a final diagnosis.</p>
                </article>
              </div>
              <div className="disclosure">
                <Mark>DISCLOSURE LIMIT</Mark> Exact proprietary architecture is not publicly
                documented.
              </div>
            </div>
          </div>
        ),
      },
      {
        act: "ACT II · HOW THE TECHNOLOGY WORKS",
        kicker: "07 · LEARNING + GROUND TRUTH",
        title: "A model learns from labels—not clinical understanding.",
        className: "s7",
        note: notes(
          "A data ribbon shows supervised learning and strict dataset separation, ending with a transparency panel.",
          "Explain images plus expert labels, optimisation, validation and final testing. Define ground truth as the reference standard used to judge predictions.",
          "The FDA clinical evaluation set is not the training set. Pearl’s training image count and demographic/scanner composition were not found in the reviewed public sources.",
          "BUE Lecture 2; FDA K210365 clinical testing.",
          "0:40",
          "Move from how the model learns to what the clinician actually sees.",
          "Speaker 3",
        ),
        content: (
          <div className="learning-layout">
            <h2>
              A model learns from labels—<em>not clinical understanding.</em>
            </h2>
            <div className="learning-ribbon">
              <div>
                <span className="ribbon-num">01</span>
                <b>RADIOGRAPHS</b>
                <p>Diverse de-identified examples</p>
              </div>
              <div>
                <span className="ribbon-num">02</span>
                <b>EXPERT LABELS</b>
                <p>Regions + finding categories</p>
              </div>
              <div>
                <span className="ribbon-num">03</span>
                <b>TRAIN</b>
                <p>Weights adjusted from error</p>
              </div>
              <div>
                <span className="ribbon-num">04</span>
                <b>VALIDATE</b>
                <p>Tune without touching test data</p>
              </div>
              <div>
                <span className="ribbon-num">05</span>
                <b>TEST</b>
                <p>Evaluate on unseen cases</p>
              </div>
            </div>
            <div className="ground-grid">
              <div className="ground-truth">
                <span>GROUND TRUTH</span>
                <b>The reference answer used to judge the model.</b>
                <p>In K210365’s clinical study: consensus of at least 3 of 4 expert readers.</p>
              </div>
              <div className="known">
                <h3>PUBLICLY KNOWN</h3>
                <p>
                  Machine-learning computer vision; neural-network-based algorithms;
                  expert-consensus reference standard for the clinical evaluation.
                </p>
              </div>
              <div className="unknown">
                <h3>NOT PUBLICLY DISCLOSED</h3>
                <p>
                  Training-set size, exact composition, demographic balance, scanner distribution
                  and proprietary architecture.
                </p>
              </div>
            </div>
            <Source>
              Clinical evaluation data ≠ model training data. Sources: FDA K210365; BUE Lecture 2.
            </Source>
          </div>
        ),
      },
      {
        act: "ACT II · HOW THE TECHNOLOGY WORKS",
        kicker: "08 · THE CLINICIAN VIEW",
        title: "Colour is a cue—not a conclusion.",
        className: "s8",
        note: notes(
          "An authentic full interface dominates; the legend translates Pearl’s visual language into clinical reading actions.",
          "Show how detections can be toggled and reviewed. Discuss caries, calculus, notable margins and periapical radiolucencies, plus anatomical/restorative overlays.",
          "A highlighted region is a hypothesis requiring examination, history and comparison with the unmarked image. Users can remove AI findings or add clinician annotations.",
          "Pearl Second Opinion User Guide, pp. 5–9.",
          "0:36",
          "Now ask whether those cues are supported by clinical evidence.",
          "Speaker 3",
        ),
        content: (
          <div className="output-layout">
            <div className="output-screen">
              <img
                src={`${A}pearl-overlay.png`}
                alt="Authentic Pearl Second Opinion view with highlighted findings"
              />
              <div className="authentic-tag">Authentic Pearl interface · User Guide</div>
            </div>
            <div className="finding-panel">
              <h2>
                Colour is a cue—
                <br />
                <em>not a conclusion.</em>
              </h2>
              <div className="finding-list">
                <span>
                  <i className="dot yellow" />
                  <b>Incipient caries</b>
                </span>
                <span>
                  <i className="dot pink" />
                  <b>Progressed decay</b>
                </span>
                <span>
                  <i className="dot green" />
                  <b>Calculus</b>
                </span>
                <span>
                  <i className="dot purple" />
                  <b>Notable margins</b>
                </span>
                <span>
                  <i className="dot blue" />
                  <b>Periapical radiolucency</b>
                </span>
              </div>
              <ol className="read-steps">
                <li>Toggle the overlay</li>
                <li>Inspect the original image</li>
                <li>Correlate clinically</li>
                <li>Accept, reject or investigate</li>
              </ol>
              <div className="interpretation">
                A detection localises attention. It does not establish disease.
              </div>
            </div>
          </div>
        ),
      },
      {
        act: "ACT III · CLINICAL EVIDENCE",
        kicker: "09 · ORIGINAL FDA EVALUATION",
        title: "The 2022 evidence: a multi-reader test.",
        className: "s9",
        note: notes(
          "Large statistics anchor a methodology path from retrospective data to aided/unaided reading.",
          "Describe the standalone and fully crossed MRMC studies. Twenty-five readers each read 2,010 images split into 1,005 unaided and 1,005 aided cases.",
          "All four expert ground-truth readers reviewed 2,010 images. For caries, 370 radiographs contained lesions and there were 655 lesions in total. The brief’s phrase “370 carious lesions” conflicts with the FDA table; the table identifies 370 lesion-containing radiographs.",
          "FDA K210365, pp. 6–9.",
          "0:45",
          "The methodology collapses into its central paired result.",
          "Speaker 4",
        ),
        content: (
          <div className="evidence-layout">
            <div className="evidence-title">
              <span>ORIGINAL CLEARANCE · K210365</span>
              <h2>
                The 2022 evidence:
                <br />
                <em>a multi-reader test.</em>
              </h2>
            </div>
            <div className="big-stats">
              <div>
                <b>2,010</b>
                <span>
                  radiographs reviewed
                  <br />
                  by all 4 GT experts
                </span>
              </div>
              <div>
                <b>25</b>
                <span>
                  clinical readers in
                  <br />
                  the MRMC study
                </span>
              </div>
              <div>
                <b>370</b>
                <span>
                  caries lesion-containing
                  <br />
                  radiographs
                </span>
              </div>
              <div>
                <b>655</b>
                <span>
                  caries lesions
                  <br />
                  in the FDA table
                </span>
              </div>
            </div>
            <div className="method">
              <span>
                <b>RETROSPECTIVE</b>multi-site, unblinded, open-label
              </span>
              <Arrow />
              <span>
                <b>GROUND TRUTH</b>≥3 of 4 experts agree
              </span>
              <Arrow />
              <span>
                <b>CROSSOVER READ</b>1,005 unaided + 1,005 aided
              </span>
              <Arrow />
              <span>
                <b>COMPARE</b>wAFROC-FOM
              </span>
            </div>
            <div className="accuracy-note">
              <b>Accuracy note:</b> FDA Table 2 reports 370 <em>lesion-containing radiographs</em>,
              not 370 total lesions.
            </div>
            <Source>Source: FDA K210365, Clinical Tests, Tables 2 and 6.</Source>
          </div>
        ),
      },
      {
        act: "ACT III · CLINICAL EVIDENCE",
        kicker: "10 · PAIRED PERFORMANCE",
        title: "A statistically significant—but modest—gain.",
        className: "s10",
        note: notes(
          "The paired bars share a deliberately narrow but clearly labelled axis; the delta is stated numerically to avoid exaggeration.",
          "Report unaided 0.740 and aided 0.758, difference 0.018, p=0.0062. Explain that wAFROC-FOM rewards correct lesion localisation while accounting for false marks.",
          "This is not “74% versus 75.8% accuracy.” Statistical significance does not alone establish the size or clinical importance of benefit in every setting.",
          "FDA K210365, Table 6.",
          "0:45",
          "Place the result within the regulatory pathway and later evolution.",
          "Speaker 4",
        ),
        content: (
          <div className="chart-layout">
            <div className="chart-copy">
              <span>CARIES DETECTION · MRMC</span>
              <h2>
                A significant—
                <br />
                <em>but modest—gain.</em>
              </h2>
              <p>
                <b>wAFROC-FOM</b> is a lesion-localisation performance figure of merit. It considers
                whether findings are correctly localised while penalising false marks.
              </p>
            </div>
            <div className="paired-chart">
              <div className="axis-label">
                wAFROC-FOM <small>axis: 0.70–0.78</small>
              </div>
              <div className="chart-axis">
                {["0.78", "0.76", "0.74", "0.72", "0.70"].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <div className="bars">
                <div className="bar-wrap">
                  <div className="bar unaided">
                    <b>0.740</b>
                  </div>
                  <span>Unaided readers</span>
                </div>
                <div className="bar-wrap">
                  <div className="bar aided">
                    <b>0.758</b>
                  </div>
                  <span>AI-assisted readers</span>
                </div>
              </div>
              <div className="delta">
                Δ +0.018 <i /> p = 0.0062
              </div>
            </div>
            <div className="not-percent">
              <b>NOT ORDINARY “% ACCURACY”</b>
              <span>Do not convert these figures into 74.0% and 75.8% diagnostic accuracy.</span>
            </div>
            <Source>
              Source: FDA K210365, Table 6. Scale is truncated and explicitly labelled to make the
              small difference visible.
            </Source>
          </div>
        ),
      },
      {
        act: "ACT III · CLINICAL EVIDENCE",
        kicker: "11 · REGULATORY RECOGNITION",
        title: "Clearance is a pathway—not an endorsement.",
        className: "s11",
        note: notes(
          "A horizontal timeline differentiates products and clearance dates; a definition panel decodes 510(k).",
          "Explain Class II medical image analyzer and substantial equivalence. Identify later clearances as evolution, not evidence that the original 2022 indication included these functions.",
          "510(k) clearance is not PMA approval and not an FDA endorsement. K243989’s summary contains a typographic inconsistency on one form, so use the clearance letter number.",
          "FDA K210365; FDA K242522 record; K242600; K243989.",
          "0:35",
          "Regulatory recognition does not remove diagnostic error, so test the failure modes.",
          "Speaker 5",
        ),
        content: (
          <div className="reg-layout">
            <div className="reg-copy">
              <span className="reg-kicker">THE REGULATORY MAP · 2022—2025</span>
              <h2>
                Clearance is a pathway—
                <br />
                <em>not an endorsement.</em>
              </h2>
              <p>
                Each clearance has its own intended use. Later capabilities cannot be projected
                backwards onto the original product.
              </p>
              <div className="clearance-key">
                <span>
                  <b>510(k)</b> substantial equivalence
                </span>
                <i>≠</i>
                <span>
                  <b>PMA</b> approval or endorsement
                </span>
              </div>
            </div>
            <div className="reg-orbit" aria-label="Regulatory evolution map">
              <div className="orbit-ring ring-one" />
              <div className="orbit-ring ring-two" />
              <div className="orbit-center">
                <small>FDA</small>
                <b>CLASS II</b>
                <span>medical image analyzer</span>
              </div>
              <div className="orbit-node node-original">
                <i>01</i>
                <span>04 MAR 2022</span>
                <b>K210365</b>
                <p>BW + PA · ≥12 · second reader</p>
              </div>
              <div className="orbit-node node-cc">
                <i>02</i>
                <span>16 JAN 2025</span>
                <b>K242522</b>
                <p>Second Opinion CC</p>
              </div>
              <div className="orbit-node node-pr">
                <i>03</i>
                <span>11 APR 2025</span>
                <b>K242600</b>
                <p>PR polygon contours</p>
              </div>
              <div className="orbit-node node-3d">
                <i>04</i>
                <span>23 MAY 2025</span>
                <b>K243989</b>
                <p>CBCT anatomy · concurrent + second reader</p>
              </div>
            </div>
            <div className="scope-ribbon">
              <span>2D INTRAORAL</span>
              <i />
              <span>CONTOURED DETECTION</span>
              <i />
              <span>3D ANATOMY</span>
              <small>Evolution of cleared scope · not a performance scale</small>
            </div>
            <Source>
              Sources: FDA clearance letters and database records for K210365, K242522, K242600,
              K243989.
            </Source>
          </div>
        ),
      },
      {
        act: "ACT III · CLINICAL EVIDENCE",
        kicker: "12 · FAILURE MODES",
        title: "Every highlight creates four possibilities.",
        className: "s12",
        note: notes(
          "A 2×2 matrix reveals each outcome; the clinically risky quadrants are visually emphasised.",
          "Define sensitivity as TP/(TP+FN), specificity as TN/(TN+FP). Discuss consequences of overcalling and missing disease.",
          "Bias and generalisability can arise from patient populations, scanners, acquisition quality and reference labels. Automation bias means accepting the screen over contrary evidence.",
          "BUE Lecture 2–3; FDA K242600 risk discussion; Ibraheem et al. 2025.",
          "0:45",
          "The matrix rotates from error classification to responsibility: who makes the decision?",
          "Speaker 5",
        ),
        content: (
          <div className="matrix-layout">
            <div className="matrix-copy">
              <span className="risk-kicker">A DETECTION IS A TEST RESULT</span>
              <h2>
                Every highlight creates
                <br />
                <em>four possibilities.</em>
              </h2>
              <div className="metric-rings">
                <div className="metric-ring sensitivity-ring">
                  <span>SENSITIVITY</span>
                  <b>TP</b>
                  <small>TP + FN</small>
                </div>
                <div className="metric-ring specificity-ring">
                  <span>SPECIFICITY</span>
                  <b>TN</b>
                  <small>TN + FP</small>
                </div>
              </div>
              <p className="matrix-warning">
                Accuracy can change with image quality, population, scanner and reference labels.
              </p>
            </div>
            <div className="confusion">
              <div className="matrix-label top">AI OUTPUT</div>
              <div className="matrix-label side">REFERENCE / CLINICAL TRUTH</div>
              <div className="matrix-col flagged-col">FLAGGED</div>
              <div className="matrix-col clear-col">NOT FLAGGED</div>
              <div className="matrix-row present-row">FINDING PRESENT</div>
              <div className="cell tp">
                <small>TRUE POSITIVE</small>
                <b>Finding flagged</b>
                <span>Review + correlate</span>
              </div>
              <div className="cell fn">
                <small>FALSE NEGATIVE</small>
                <b>Finding missed</b>
                <span>Risk: delayed care</span>
              </div>
              <div className="matrix-row absent-row">FINDING ABSENT</div>
              <div className="cell fp">
                <small>FALSE POSITIVE</small>
                <b>Healthy site flagged</b>
                <span>Risk: unnecessary follow-up</span>
              </div>
              <div className="cell tn">
                <small>TRUE NEGATIVE</small>
                <b>Correctly clear</b>
                <span>Still interpret in context</span>
              </div>
            </div>
            <div className="risk-spectrum">
              <span>
                <b>01 · IMAGE</b>Low contrast · positioning · artifacts
              </span>
              <span>
                <b>02 · DOMAIN SHIFT</b>New patients · clinics · scanners
              </span>
              <span>
                <b>03 · AUTOMATION BIAS</b>Trusting the overlay over contrary evidence
              </span>
              <span>
                <b>04 · LABEL BIAS</b>Experts and reference standards can disagree
              </span>
            </div>
          </div>
        ),
      },
      {
        act: "ACT IV · CRITICAL EVALUATION",
        kicker: "13 · CLINICAL RESPONSIBILITY",
        title: "The AI informs. The dentist decides.",
        className: "s13",
        note: notes(
          "An asymmetric balance places the patient above an AI/dentist responsibility split.",
          "AI analyses and marks. The dentist integrates history, symptoms, clinical examination, previous imaging, patient values and uncertainty.",
          "The final decision and documentation remain human responsibilities. The software’s own later FDA summary states it is not a replacement for full review or clinical judgement.",
          "FDA K242600; BUE Lecture 3.",
          "0:35",
          "Use this responsibility model to form a practical adoption recommendation.",
          "Speaker 5",
        ),
        content: (
          <div className="decision-layout">
            <div className="decision-head">
              <span>RESPONSIBILITY FLOW</span>
              <h2>
                The AI informs.
                <br />
                <em>The dentist decides.</em>
              </h2>
            </div>
            <div className="responsibility-flow">
              <svg viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true">
                <path
                  className="flow-band band-one"
                  d="M180 70 C390 70 385 120 520 145 S745 120 830 145"
                />
                <path
                  className="flow-band band-two"
                  d="M180 185 C360 185 400 210 520 215 S710 225 830 215"
                />
                <path
                  className="flow-band band-three"
                  d="M180 300 C360 300 400 280 520 285 S710 305 830 285"
                />
              </svg>
              <div className="flow-column ai-column">
                <span>AI SIGNALS</span>
                <ul>
                  <li>Pixel patterns</li>
                  <li>Suspicious regions</li>
                  <li>Consistent overlays</li>
                </ul>
              </div>
              <div className="flow-column context-column">
                <span>PATIENT CONTEXT</span>
                <div className="context-core">
                  <ToothIcon />
                  <b>HISTORY</b>
                  <b>SYMPTOMS</b>
                  <b>EXAMINATION</b>
                  <b>VALUES</b>
                </div>
              </div>
              <div className="flow-column dentist-column">
                <span>CLINICAL JUDGEMENT</span>
                <ul>
                  <li>Confirm</li>
                  <li>Reject</li>
                  <li>Investigate</li>
                </ul>
              </div>
            </div>
            <div className="accountability-lock">
              <span>AI OUTPUT</span>
              <Arrow />
              <span>CLINICAL INTERPRETATION</span>
              <Arrow />
              <b>DENTIST ACCOUNTABILITY</b>
            </div>
          </div>
        ),
      },
      {
        act: "ACT IV · CRITICAL EVALUATION",
        kicker: "14 · OUR RECOMMENDATION",
        title: "Use it—but inside a disciplined protocol.",
        className: "s14",
        note: notes(
          "A balanced editorial ledger leads to a clear conditional recommendation and five-step protocol.",
          "Acknowledge consistency, visual communication and evidence of aided performance. Balance these against false results, scope, opacity and generalisability.",
          "Recommend use as a second reader after initial independent review, with image-quality checks, clinical correlation and auditing. Avoid sole reliance and treatment decisions from overlays alone.",
          "Synthesis of FDA K210365/K242600, BUE lectures, Ibraheem et al. 2025, Ji et al. 2026.",
          "0:45",
          "Distil the protocol to the three-word final verdict.",
          "Speaker 6",
        ),
        content: (
          <div className="verdict-layout">
            <div className="verdict-head">
              <h2>
                Use it—
                <br />
                <em>inside a disciplined protocol.</em>
              </h2>
              <p>
                Our recommendation is conditional adoption: a second reader with high human
                oversight.
              </p>
            </div>
            <div className="adoption-dashboard">
              <div className="adoption-matrix">
                <span className="axis-y">HUMAN OVERSIGHT →</span>
                <span className="axis-x">EXPECTED CLINICAL VALUE →</span>
                <div className="quadrant q1">
                  <small>LOW VALUE / HIGH OVERSIGHT</small>
                  <b>Do not adopt</b>
                </div>
                <div className="quadrant q2">
                  <small>HIGH VALUE / HIGH OVERSIGHT</small>
                  <b>USE AS SECOND READER</b>
                </div>
                <div className="quadrant q3">
                  <small>LOW VALUE / LOW OVERSIGHT</small>
                  <b>Avoid</b>
                </div>
                <div className="quadrant q4">
                  <small>HIGH VALUE / LOW OVERSIGHT</small>
                  <b>Unsafe reliance</b>
                </div>
                <div className="pearl-marker">
                  <span>PEARL</span>
                  <i />
                </div>
              </div>
              <div className="evidence-gauge">
                <div className="gauge-visual">
                  <div className="gauge-arc" />
                  <i />
                  <b>
                    CONDITIONAL
                    <br />
                    ADOPTION
                  </b>
                </div>
                <div className="gauge-legend">
                  <span>
                    <i className="good" />
                    Consistent second look
                  </span>
                  <span>
                    <i className="good" />
                    Visual patient communication
                  </span>
                  <span>
                    <i className="warn" />
                    False results remain
                  </span>
                  <span>
                    <i className="warn" />
                    Training data opacity
                  </span>
                </div>
              </div>
            </div>
            <div className="protocol">
              {["READ FIRST", "CHECK IMAGE", "TOGGLE AI", "CORRELATE", "DOCUMENT"].map((x, i) => (
                <span key={x}>
                  <b>{i + 1}</b>
                  {x}
                </span>
              ))}
            </div>
            <div className="recommend">
              <b>THE NON-NEGOTIABLE</b>
              <span>
                Read independently first. Toggle the AI second. Correlate clinically. Document the
                decision.
              </span>
            </div>
          </div>
        ),
      },
      {
        act: "ACT IV · CRITICAL EVALUATION",
        kicker: "15 · FINAL VERDICT",
        title: "Detect. Verify. Decide.",
        className: "s15",
        note: notes(
          "The clinical image recedes behind a three-word kinetic verdict and a single closing statement.",
          "Deliver the conclusion slowly. AI may improve visual attention, but diagnosis belongs to a clinician who understands the entire patient.",
          "The closing words encode the safe workflow: detect a candidate, verify it independently, decide in patient context.",
          "Synthesis of FDA and course sources.",
          "0:25",
          "Pause, then move to references or invite questions after the timed presentation.",
          "Speaker 6",
        ),
        content: (
          <div className="finale">
            <img src={`${A}pearl-finding.png`} alt="" />
            <div className="finale-wash" />
            <div className="finale-copy">
              <p>Artificial intelligence can improve how we see the radiograph.</p>
              <h2>
                It cannot replace how we
                <br />
                <em>understand the patient.</em>
              </h2>
              <div className="three-words">
                <span>DETECT.</span>
                <span>VERIFY.</span>
                <span>DECIDE.</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        act: "TEAM · REFERENCES",
        kicker: "16 · THE PEOPLE BEHIND THE QUESTION",
        title: "Four minds. One clinical question.",
        className: "s16",
        note: notes(
          "A clean, readable two-column Vancouver-style bibliography closes the deck.",
          "No formal narration is required. Direct the audience to the primary FDA documents and note that every slide carries a source line.",
          "Primary regulatory sources take priority over company marketing. Course handout and lecture material frame the assignment and educational definitions.",
          "All references listed on slide.",
          "0:05",
          "End presentation. Q&A is separate.",
          "References",
        ),
        content: (
          <div className="team-finale">
            <div className="team-intro">
              <span>THE BRITISH UNIVERSITY IN EGYPT · AI BASICS FOR DENTISTRY</span>
              <h2>
                Four minds.
                <br />
                <em>One clinical question.</em>
              </h2>
              <p>
                Who should make the final decision when artificial intelligence reads the image?
              </p>
            </div>
            <div className="team-portraits">
              {[
                ["karim.png", "Karim", "01"],
                ["helmy.png", "Helmy", "02"],
                ["reda.png", "Reda", "03"],
                ["george.png", "George", "04"],
              ].map(([image, name, number]) => (
                <div className="person" key={name}>
                  <img src={`${A}${image}`} alt={`${name}, presentation team member`} />
                  <div>
                    <small>{number}</small>
                    <b>{name}</b>
                  </div>
                </div>
              ))}
            </div>
            <div className="compact-refs">
              <span>SELECTED REFERENCES · FULL LINKS IN PDF METADATA</span>
              <div>
                <p>
                  <b>1</b> FDA K210365, Second Opinion®, 4 Mar 2022.
                </p>
                <p>
                  <b>2</b> FDA K242522, Second Opinion CC, 16 Jan 2025.
                </p>
                <p>
                  <b>3</b> FDA K242600, PR Contours, 11 Apr 2025.
                </p>
                <p>
                  <b>4</b> FDA K243989, Second Opinion 3D, 23 May 2025.
                </p>
                <p>
                  <b>5</b> Pearl Inc. Second Opinion User Guide.
                </p>
                <p>
                  <b>6</b> Ibraheem et al. Diagnostics. 2025;15:1432.
                </p>
                <p>
                  <b>7</b> Ji et al. J Dent Educ. 2026;90:1342–49.
                </p>
                <p>
                  <b>8</b> BUE AI Basics for Dentistry, Lectures 2–3.
                </p>
              </div>
            </div>
            <div className="team-signoff">DETECT · VERIFY · DECIDE</div>
          </div>
        ),
      },
    ],
    [],
  );

  const go = (next: number) => {
    const safeIndex = Math.max(0, Math.min(slides.length - 1, next));
    setIndex(safeIndex);
    window.history.replaceState(null, "", `?slide=${safeIndex + 1}`);
    setOverview(false);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") {
        event.preventDefault();
        go(index + 1);
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        go(index - 1);
      }
      if (event.key === "Home") go(0);
      if (event.key === "End") go(slides.length - 1);
      if (event.key.toLowerCase() === "o") setOverview((v) => !v);
      if (event.key === "Escape") {
        setOverview(false);
        setHelp(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, slides.length]);

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => go(0)}>
          <span className="brand-mark">P</span>
          <span>
            <b>PEARL</b>
            <small>SECOND OPINION · A CRITICAL REVIEW</small>
          </span>
        </button>
        <div className="top-actions">
          <button onClick={() => setOverview((v) => !v)} className={overview ? "active" : ""}>
            Overview
          </button>
          <button onClick={() => window.open("/Pearl-Second-Opinion.pdf", "_blank")}>
            Download PDF
          </button>
          <button onClick={() => window.open("/Pearl-Second-Opinion.pptx", "_blank")}>
            Download PPT
          </button>
          <button
            className="icon-button"
            aria-label="Keyboard shortcuts"
            onClick={() => setHelp((v) => !v)}
          >
            ?
          </button>
        </div>
      </header>

      <section className="stage">
        {slides.map((slide, i) => (
          <article
            className={`slide ${slide.className || ""} transition-${i % 6} ${i === index ? "current" : ""}`}
            aria-hidden={i !== index}
            key={slide.kicker}
          >
            <div className="slide-meta">
              <span>{slide.kicker}</span>
              <span>{slide.act}</span>
            </div>
            <div className="slide-content">{slide.content}</div>
            <div className="slide-number">
              {String(i + 1).padStart(2, "0")}
              <i />
              16
            </div>
          </article>
        ))}
      </section>

      <nav className="controls" aria-label="Slide navigation">
        <button onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous slide">
          <Arrow direction="left" />
        </button>
        <div className="progress">
          <i style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
        </div>
        <span>
          <b>{String(index + 1).padStart(2, "0")}</b> / 16
        </span>
        <button
          onClick={() => go(index + 1)}
          disabled={index === slides.length - 1}
          aria-label="Next slide"
        >
          <Arrow />
        </button>
      </nav>

      {overview && (
        <div className="overview-panel">
          <div className="overview-head">
            <div>
              <span>FULL DECK</span>
              <h2>16 slides · 9:08 target</h2>
            </div>
            <button onClick={() => setOverview(false)}>Close</button>
          </div>
          <div className="overview-grid">
            {slides.map((slide, i) => (
              <button
                key={slide.kicker}
                onClick={() => go(i)}
                className={i === index ? "selected" : ""}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{slide.title}</b>
                <small>
                  {slide.note.speaker} · {slide.note.duration}
                </small>
              </button>
            ))}
          </div>
        </div>
      )}

      {help && (
        <div className="help-pop">
          <button onClick={() => setHelp(false)}>×</button>
          <b>KEYBOARD</b>
          <span>← → Navigate</span>
          <span>Space Next</span>
          <span>O Overview</span>
          <span>Esc Close</span>
        </div>
      )}
    </main>
  );
}
