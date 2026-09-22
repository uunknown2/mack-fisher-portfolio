type Photo = { src: string; alt: string; caption: string }
type Project = { id: string; title: string; context: string; summary: string; outcome: string; details: [string, string][]; photos: Photo[] }

const projects: Project[] = [
  {
    id: 'cold-spray', title: 'Cold-Spray Rotating Repair Robot', context: 'Penn State Applied Research Laboratory · R&D Engineer Intern',
    summary: 'I led prototype development of a robot for repairing cylindrical metal components, integrating mechanical design, fabrication, motion controls, and software.',
    outcome: 'A coordinated-motion dry run helped support funding approval for a second-generation prototype.',
    details: [
      ['Design & integration', 'Integrated linear and rotary motion, a swivel mount, closed-loop steppers, drivers, and limit switches.'],
      ['Manufacturing & validation', 'Created approximately 10 manufacturing drawings and machined robotic mounts. Demonstrated coordinated raster motion in a compressed-air dry run.'],
      ['Software', 'Developed an AI-assisted Python script to convert OrcaSlicer output for GRBL, saving approximately 15 minutes of manual processing per file.'],
    ],
    photos: [
      { src: 'cold-spray-representative.webp', alt: 'Representative cold-spray nozzle directed at a rotating cylindrical component', caption: 'Representative process image. The actual ARL system cannot be shown due to confidentiality.' },
      { src: 'mactech-robot-component.webp', alt: 'Mactech component used as part of the cold-spray robot', caption: 'Mactech component used in the robot. Authorized for sharing; restricted system details are omitted.' },
    ],
  },
  {
    id: 'cb550', title: '1974 Honda CB550 rebuild', context: 'Independent project · April 2023–January 2025',
    summary: 'I independently rebuilt a 1974 Honda CB550 from the frame up, combining mechanical restoration, welded fabrication, and electrical integration.',
    outcome: 'Passed a mechanic’s inspection and remains in regular use.',
    details: [
      ['Mechanical & fabrication', 'Overhauled the drivetrain, suspension, and brakes. Fabricated and welded a seat delete and U-bar, and formed a sheet-metal battery box for the electronics.'],
      ['Electrical & commissioning', 'Integrated custom wiring, LED lighting and diodes, a regulator-rectifier, and replacement ignition. Configured timing and resolved electrical integration issues.'],
    ],
    photos: [
      { src: 'cb550-stripped.webp', alt: 'CB550 frame and engine during teardown', caption: 'Frame and engine during teardown.' },
      { src: 'cb550-build.webp', alt: 'Mack working on the CB550 rear frame', caption: 'Rear-frame fabrication for the café racer conversion.' },
      { src: 'cb550-finished.webp', alt: 'Completed Honda CB550 café racer', caption: 'Completed motorcycle after mechanical and electrical integration.' },
    ],
  },
  {
    id: 'motorsports', title: 'Titanium suspension endplate', context: 'Nittany Motorsports · October–November 2025',
    summary: 'I used Fusion 360 Generative Design to reduce the weight of a titanium suspension endplate for the chassis and suspension team.',
    outcome: 'Reduced suspension endplate weight using Fusion 360 Generative Design.',
    details: [
      ['Design contribution', 'Applied generative design to improve strength-to-weight performance. The photographed endplates show the design variations.'],
      ['Related validation work', 'Designed a tubular-chassis torsional-rigidity test fixture in CAD and began developing its loading and measurement procedure.'],
    ],
    photos: [{ src: 'nms-endplates.webp', alt: 'Four suspension endplate variations on a workbench', caption: 'Suspension endplate design variations.' }],
  },
  {
    id: 'feeder', title: 'Arduino dog feeder', context: 'Independent project · January–February 2024',
    summary: 'I designed and built an auger-based feeder, connecting a 3D-printed mechanism with a stepper motor, driver, and Arduino control.',
    outcome: 'Eliminated dispensing jams through three CAD and printed design iterations, then verified operation on the bench.',
    details: [
      ['Mechanism & iteration', 'Designed the assembly in Fusion 360. Corrected clearance between the ramp and auger through repeated printing and testing.'],
      ['Motor selection & control', 'Selected a NEMA stepper and TMC-series driver based on torque requirements. Programmed button-activated dispensing, speed, rotation count, duration, and direction.'],
    ],
    photos: [
      { src: 'dog-feeder-empty.webp', alt: 'Printed feeder housing and motor assembly', caption: 'Printed housing and stepper-motor integration.' },
      { src: 'dog-feeder-test.webp', alt: 'Auger dispensing kibble during a bench test', caption: 'Dispensing test with the assembled mechanism.' },
    ],
  },
  {
    id: 'impala', title: '1964 Impala engine swap', context: 'Client project · April–August 2025',
    summary: 'I completed a Chevy 350 engine swap for a client, managing component transfer, commissioning, parts sourcing, and progress updates.',
    outcome: 'Delivered a running vehicle within the five-month schedule and budget.',
    details: [
      ['Installation & commissioning', 'Transferred the intake manifold and accessory drives. Tuned the carburetor and ignition timing, repaired wiring, and diagnosed fuel-system issues.'],
      ['Diagnostics & handoff', 'Used a multimeter, fuel-pressure gauge, and timing light. Identified incorrect fuel-pump placement and recommended professional relocation.'],
    ],
    photos: [
      { src: 'impala-engine-out.webp', alt: 'Impala with the engine removed in the shop', caption: 'Engine removal and preparation.' },
      { src: 'impala-install.webp', alt: 'Replacement Chevy 350 in the Impala engine bay', caption: 'Replacement engine installed.' },
      { src: 'impala-finished.webp', alt: 'Assembled Chevy 350 engine installation', caption: 'Assembled powertrain.' },
    ],
  },
  {
    id: 'dj-stand', title: 'Modular DJ stand', context: 'Sigma Pi · Independent project · August 2026',
    summary: 'I designed, sourced, and fabricated a custom DJ stand in four days, using detachable sections to simplify transport and repeated assembly.',
    outcome: 'Six sections assemble in about two minutes. The stand remains in use approximately three times per week.',
    details: [
      ['Design & delivery', 'Used CAD, dimensioned sketches, and cut lists to plan an approximately 11 × 5 × 5 ft structure. Each section can be transported by one or two people.'],
      ['Fabrication', 'Independently sourced materials and fabricated the stand, including CNC-routed panels, within the four-day delivery window.'],
    ],
    photos: [
      { src: 'dj-finished.webp', alt: 'Completed Sigma Pi DJ stand', caption: 'Completed modular stand in use at Sigma Pi.' },
      { src: 'dj-cnc.webp', alt: 'Mack beside the CNC router during fabrication', caption: 'Panel fabrication at the CNC router.' },
      { src: 'dj-construction.webp', alt: 'Mack seated on the assembled DJ stand with its timber frame, legs, and plywood platforms exposed', caption: 'Assembled timber frame and platforms before the front panels were fitted.' },
    ],
  },
]

export default function SelectedWork() {
  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="work-heading">
        <p className="eyebrow"><span className="index">01</span> Engineering portfolio</p>
        <h2 id="work-title">Selected work</h2>
        <p>Robotics, mechanical design, and independently built hardware. Each project outlines my contribution, the engineering work, and the result.</p>
      </div>
      <nav className="project-index" aria-label="Project index">
        {projects.map((project, index) => <a key={project.id} href={`#${project.id}`}><span>{String(index + 1).padStart(2, '0')}</span>{project.title}</a>)}
      </nav>
      {projects.map((project, index) => (
        <article className={`case-study case-${project.id}`} id={project.id} key={project.id} aria-labelledby={`${project.id}-title`}>
          <header className="case-header">
            <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
            <div><p className="case-context">{project.context}</p><h3 id={`${project.id}-title`}>{project.title}</h3></div>
          </header>
          <div className="case-intro"><p>{project.summary}</p><p className="case-result"><span>Outcome</span>{project.outcome}</p></div>
          <div className={`case-gallery gallery-${project.photos.length}`}>
            {project.photos.map(photo => <figure key={photo.src}><img src={`/images/${photo.src}`} alt={photo.alt} loading="lazy" decoding="async" /><figcaption>{photo.caption}</figcaption></figure>)}
          </div>
          <div className="case-details">
            {project.details.map(([title, text]) => <div key={title}><h4>{title}</h4><p>{text}</p></div>)}
          </div>
        </article>
      ))}
    </section>
  )
}
