/* ============================================================
   DATA FILE — this is the only file you normally need to edit.
   ------------------------------------------------------------
   - SITE  : global settings (last-updated date, optional links)
   - NEWS  : news items, newest first
   - PUBS  : every publication. Newest date first within a category.
   See README.md for step-by-step instructions (in Korean).
   ============================================================ */

const SITE = {
  updated: "2026-08-14",            // shown in the footer — bump when you edit
  cv: "assets/pdf/Inyoung_Oh_CV.pdf",
  researchStatement: null,          // set to "assets/pdf/Inyoung_Oh_Research_Summary.pdf" when ready to publish
  scholar: "https://scholar.google.co.kr/citations?hl=en&user=e3h5YtAAAAAJ&view_op=list_works&sortby=pubdate",
  github: "https://github.com/inyoungoh-cde",
  linkedin: "https://www.linkedin.com/in/iyohcde/",
  // email is split to keep crawlers from harvesting it
  emailUser: "deanoh90",
  emailDomain: "kist.re.kr",
};

/* Third-person bio for invited talks / committee use (copy button on the site). */
const BIO =
  "Inyoung Oh is a postdoctoral fellow in the Center for Artificial Intelligence at the " +
  "Korea Institute of Science and Technology (KIST). Oh received a Ph.D. in Mechanical " +
  "and Robotics Engineering from the Gwangju Institute of Science and Technology (GIST) " +
  "in 2026, advised by Prof. Kwang Hee Ko. Oh's research fuses explicit geometry — " +
  "surface normals, sharp features, and ground planes — with learned and semantic models " +
  "so that recovered 3D becomes metric, consistent, and structured, spanning point-cloud " +
  "analysis (including SFD-Net, ECCV 2026) and metric 3D from monocular video.";

const NEWS = [
  { date: "2026-08-08", html: 'Our paper on <a href="publications.html#bmvc2026">lighting-aware augmentation for low-light re-identification</a> has been accepted to <em>BMVC 2026</em> &mdash; my first collaboration at KIST.' },
  { date: "2026-06-18", html: 'Our paper <strong>SFD-Net</strong> has been accepted to <em>ECCV 2026</em>. <a href="https://inyoungoh-cde.github.io/SFD-Net/" target="_blank" rel="noopener">Project page</a> · <a href="publications.html#sfdnet2026">details</a>.' },
  { date: "2026-05-19", html: 'Our paper on <a href="publications.html#ijig2026">attention-guided multi-scale normal estimation</a> has been accepted to the <em>International Journal of Image and Graphics</em>.' },
  { date: "2026-02-01", html: 'Started as a Postdoctoral Fellow in the Center for Artificial Intelligence at KIST, working on metric 3D from monocular video.' },
  { date: "2025-11-06", html: 'Our paper on an <a href="publications.html#cii2026">MR remote-collaboration framework</a> has been accepted to <em>Computers in Industry</em>. Featured on the <a href="https://www.gist.ac.kr/kr/html/sub07/070102.html?mode=V&no=219806" target="_blank" rel="noopener">GIST website</a>, the <a href="https://blog.naver.com/bestgista/224105644900" target="_blank" rel="noopener">GIST blog</a>, and <a href="https://science.ytn.co.kr/program/view.php?mcd=0082&key=202512051106248007" target="_blank" rel="noopener">YTN Science</a>.' },
  { date: "2024-11-26", html: "Successfully defended my doctoral dissertation (degree conferred February 2026)." },
  { date: "2023-11-09", html: 'Our paper on <a href="publications.html#jcde2023">normal-guided LiDAR semantic segmentation</a> has been accepted to the <em>Journal of Computational Design and Engineering</em>.' },
  { date: "2021-12-22", html: "Presented my LiDAR research at a KEPCO research seminar: object-detection-based 3D LiDAR intensity calibration and real-time detection of clustered object candidates using deep learning." },
  { date: "2020-06-11", html: 'Our paper on <a href="publications.html#tvcj2021">automated recognition of 3D pipelines</a> has been accepted to <em>The Visual Computer</em>.' },
  { date: "2018-09-07", html: 'Our paper on <a href="publications.html#eurovr2018">automatic detection of cylindrical objects</a> has been accepted to <em>EuroVR 2018</em>.' },
  { date: "2017-06-06", html: 'Our paper on <a href="publications.html#cgi2017">RANSAC-based multi-sphere detection</a> has been accepted to <em>CGI 2017</em>.' },
];

/* ------------------------------------------------------------
   Themes (used by the filter chips on the publications page).
   ------------------------------------------------------------ */
const THEMES = {
  geometry: "Prior-Free 3D Structure",
  gdl: "Geometric Deep Learning",
  image3d: "Image-Grounded Metric 3D",
};

/* ------------------------------------------------------------
   PUBS — category: "international" | "inprep" | "domestic" | "patent"
   Within each category, keep newest `date` first.
   Write my name exactly as "Inyoung Oh" — it is highlighted automatically.
   ------------------------------------------------------------ */
const PUBS = [
  /* ================= International ================= */
  {
    id: "sfdnet2026",
    category: "international",
    theme: "gdl",
    selected: true,
    date: "2026-06-18",
    year: 2026,
    title: "SFD-Net: Sharp Feature Detection Network Based on Local Geometric Features",
    authors: "Inyoung Oh, Kwang Hee Ko",
    venue: "European Conference on Computer Vision (ECCV)",
    badges: [{ kind: "status", text: "ECCV 2026 · accepted" }],
    thumb: "assets/img/pub-sfdnet.webp",
    abstract:
      "Reliable detection of sharp features in point clouds — loci where the surface-normal field is discontinuous — remains challenging under increased local density variation and noise. SFD-Net couples a compact multi-scale Local Geometric Descriptor (LGD) with an enhanced PointNet++ backbone. LGD aggregates second-moment statistics of surface normal differences at three nested neighborhood scales, yielding rigid-motion- and scale-invariant cues that remain stable under joint noise and spacing variability. On the ABC benchmark, SFD-Net achieves state-of-the-art F1-score and competitive false positive rate across four noise conditions under a consistent evaluation setup. LGD further improves competitive detectors in a plug-and-play manner without architectural changes, and transfer to S3DIS confirms generalization to real scans.",
    links: [
      { label: "Code", url: "https://github.com/inyoungoh-cde/SFD-Net" },
      { label: "Project page", url: "https://inyoungoh-cde.github.io/SFD-Net/" },
    ],
    bibtex:
`@inproceedings{oh2026sfdnet,
  title     = {SFD-Net: Sharp Feature Detection Network Based on Local Geometric Features},
  author    = {Oh, Inyoung and Ko, Kwang Hee},
  booktitle = {European Conference on Computer Vision (ECCV)},
  year      = {2026}
}`,
  },
  {
    id: "bmvc2026",
    category: "international",
    theme: "image3d",
    selected: false,
    date: "2026-08-08",
    year: 2026,
    title: "Lighting-Aware Diffusion-based Data Augmentation for Robust Low-Light Re-Identification",
    authors: "Tuan Minh Bui, Dongbo Min, Inyoung Oh, Junghyun Cho",
    venue: "British Machine Vision Conference (BMVC)",
    badges: [{ kind: "status", text: "BMVC 2026 · accepted" }],
    thumb: "assets/img/pub-bmvc.webp",
  },

  {
    id: "ijig2026",
    category: "international",
    theme: "gdl",
    selected: false,
    date: "2026-05-19",
    year: 2026,
    title: "Attention-Guided Multi-Scale Point Cloud Normal Estimation with Noise-Aware Training",
    authors: "Inyoung Oh, Jinho Song, Minsung Kim, Dongho Yun, Kwang Hee Ko",
    venue: "International Journal of Image and Graphics",
    badges: [{ kind: "status", text: "accepted" }],
    thumb: "assets/img/pub-ijig.webp",
    abstract:
      "An attention-guided multi-scale framework for surface normal estimation on point clouds. Multi-scale neighborhood features are adaptively fused via attention, and normals are predicted directly rather than reconstructed through surface fitting. To reduce the impact of measurement noise, training targets for corrupted patches are replaced with the nearest noise-free ground-truth normals identified by Chamfer-distance association, and two lightweight geometric regularizers — coplanarity-guided weighting and Z-axis alignment — yield a balanced training objective without added model complexity. The method reaches the lowest noise-free RMSE on the PCPNet primitive subset, stays robust under density variation, and transfers to large-scale indoor scans with minimal degradation, at a moderate parameter count and runtime suitable for commodity hardware.",
    links: [
      { label: "Code", url: "https://github.com/inyoungoh-cde/DeepLearningNormalEstimation" },
    ],
    bibtex:
`@article{oh2026attention,
  title   = {Attention-Guided Multi-Scale Point Cloud Normal Estimation with Noise-Aware Training},
  author  = {Oh, Inyoung and Song, Jinho and Kim, Minsung and Yun, Dongho and Ko, Kwang Hee},
  journal = {International Journal of Image and Graphics},
  year    = {2026},
  note    = {Accepted}
}`,
  },
  {
    id: "cii2026",
    category: "international",
    theme: "image3d",
    selected: true,
    date: "2026-01-01",
    year: 2026,
    title: "A Mixed Reality-based Remote Collaboration Framework Using Improved Pose Estimation",
    authors: "Inyoung Oh, Gilsang Jang, Jinho Song, Moongu Son, Daewoon Kim, Junsang Yun, Kwang Hee Ko",
    venue: "Computers in Industry, 174, 104414",
    badges: [],
    thumb: "assets/img/pub-cii.webp",
    abstract:
      "Accurate pose estimation is crucial for aligning virtual content with physical surroundings in Mixed Reality. This paper proposes a learning-based approach for accurate 6-DoF pose estimation from a single monocular RGB image, eliminating the need for markers and depth sensors. The method combines YOLO6D with an RoI-based color augmentation technique using PCA, mitigating the effects of background variation and lighting changes. The estimator is integrated into an MR-based remote collaboration framework that keeps information rendering consistent and robust across devices, and experiments demonstrate superior performance over strong baselines.",
    links: [
      { label: "Paper", url: "https://doi.org/10.1016/j.compind.2025.104414" },
    ],
    bibtex:
`@article{oh2026mixed,
  title   = {A Mixed Reality-based Remote Collaboration Framework Using Improved Pose Estimation},
  author  = {Oh, Inyoung and Jang, Gilsang and Song, Jinho and Son, Moongu and Kim, Daewoon and Yun, Junsang and Ko, Kwang Hee},
  journal = {Computers in Industry},
  volume  = {174},
  pages   = {104414},
  year    = {2026},
  doi     = {10.1016/j.compind.2025.104414}
}`,
  },
  {
    id: "jcde2023",
    category: "international",
    theme: "gdl",
    selected: true,
    date: "2023-11-09",
    year: 2023,
    title: "Improved Semantic Segmentation Network Using Normal Vector Guidance for LiDAR Point Clouds",
    authors: "Minsung Kim, Inyoung Oh, Dongho Yun, Kwang Hee Ko",
    venue: "Journal of Computational Design and Engineering, 10(6), 2332–2344",
    badges: [],
    thumb: "assets/img/pub-jcde.webp",
    abstract:
      "A network model that enhances LiDAR semantic segmentation by utilizing normal vector information. A normal estimator exploits the intensity and reflection angles of LiDAR returns, and a Normal Local Feature Aggregation module integrates normal relations into the network to improve local feature extraction. On SemanticKITTI the architecture outperforms RandLA-Net and other baselines (mIoU 57.9%), with the largest gains on small, safety-critical classes such as bicycles, motorcycles, and pedestrians.",
    links: [
      { label: "Paper", url: "https://doi.org/10.1093/jcde/qwad102" },
    ],
    bibtex:
`@article{kim2023improved,
  title   = {Improved Semantic Segmentation Network Using Normal Vector Guidance for LiDAR Point Clouds},
  author  = {Kim, Minsung and Oh, Inyoung and Yun, Dongho and Ko, Kwang Hee},
  journal = {Journal of Computational Design and Engineering},
  volume  = {10},
  number  = {6},
  pages   = {2332--2344},
  year    = {2023},
  doi     = {10.1093/jcde/qwad102}
}`,
  },
  {
    id: "tvcj2021",
    category: "international",
    theme: "geometry",
    selected: true,
    date: "2020-06-11",
    year: 2021,
    title: "Automated Recognition of 3D Pipelines from Point Clouds",
    authors: "Inyoung Oh, Kwang Hee Ko",
    venue: "The Visual Computer, 37(6), 1385–1400",
    badges: [],
    thumb: "assets/img/pub-tvcj.webp",
    abstract:
      "A method for detecting and reconstructing pipelines from a 3D point cloud without user-specified priors. Points on cylindrical objects are extracted using principal-curvature properties, candidate radii are estimated from a curvature histogram, and a RANSAC-based algorithm recovers sphere centroids that yield the orientation and centerline of each cylinder. Connectivity analysis then instantiates elbows and T-junctions to form complete pipelines. The method outperforms existing approaches on synthetic and real scanned point clouds.",
    links: [
      { label: "Paper", url: "https://doi.org/10.1007/s00371-020-01872-y" },
    ],
    bibtex:
`@article{oh2021automated,
  title   = {Automated Recognition of 3D Pipelines from Point Clouds},
  author  = {Oh, Inyoung and Ko, Kwang Hee},
  journal = {The Visual Computer},
  volume  = {37},
  number  = {6},
  pages   = {1385--1400},
  year    = {2021},
  doi     = {10.1007/s00371-020-01872-y}
}`,
  },
  {
    id: "eurovr2018",
    category: "international",
    theme: "geometry",
    selected: false,
    date: "2018-09-07",
    year: 2018,
    title: "Automatic Detection of Cylindrical Objects from Unorganized Point Cloud",
    authors: "Inyoung Oh, Kwang Hee Ko",
    venue: "EuroVR 2018, London, UK (poster)",
    badges: [],
    thumb: "assets/img/pub-eurovr.webp",
    abstract:
      "An automated, robust method for detecting multiple cylindrical objects from an unorganized point cloud and estimating a complete pipe structure. A parabolic patch is extracted at each point from its neighborhood, a virtual sphere of the patch-derived radius is considered at that point, and traced sphere centroids reveal the axis of each cylinder. Individual cylinders and their joints are then estimated to form a complete pipe, validated across varied examples.",
    links: [],
    bibtex:
`@inproceedings{oh2018automatic,
  title     = {Automatic Detection of Cylindrical Objects from Unorganized Point Cloud},
  author    = {Oh, Inyoung and Ko, Kwang Hee},
  booktitle = {EuroVR},
  year      = {2018}
}`,
  },
  {
    id: "cgi2017",
    category: "international",
    theme: "geometry",
    selected: false,
    date: "2017-06-06",
    year: 2017,
    title: "A RANSAC-based Method for Detection of Multiple Spheres from a Point Cloud",
    authors: "Inyoung Oh, Dongho Yun, Daewoon Kim, Kwang Hee Ko",
    venue: "Computer Graphics International (CGI) 2017, Yokohama, Japan (poster)",
    badges: [],
    thumb: "assets/img/pub-cgi.webp",
    abstract:
      "Detecting multiple spheres of unknown radii in a Kinect point cloud. Curvature is estimated at each point, a statistical method groups points with similar curvature, and each group is used for sphere estimation. Experiments show successful estimation of spheres with various radii.",
    links: [
      { label: "Program", url: "https://fj.ics.keio.ac.jp/cgi17/assets/CGI17_Program_170624.pdf" },
    ],
    bibtex:
`@inproceedings{oh2017ransac,
  title     = {A RANSAC-based Method for Detection of Multiple Spheres from a Point Cloud},
  author    = {Oh, Inyoung and Yun, Dongho and Kim, Daewoon and Ko, Kwang Hee},
  booktitle = {Computer Graphics International (CGI)},
  year      = {2017}
}`,
  },

  /* ================= In preparation (title-only by design) ================= */
  {
    id: "reloc-prep",
    category: "inprep",
    theme: "image3d",
    date: "2026-07-01",
    year: 2026,
    title: "Metric Relocalization in Up-to-Scale Maps via Ground-Plane Geometry",
    authors: "Inyoung Oh, et al.",
    venue: "Manuscript in preparation",
    badges: [{ kind: "status", text: "in preparation" }],
  },
  {
    id: "dirstat-prep",
    category: "inprep",
    theme: "gdl",
    date: "2026-06-01",
    year: 2026,
    title: "A Directional Statistics Approach to Geometric Sharpness Estimation in 3D Point Clouds",
    authors: "Inyoung Oh, et al.",
    venue: "Manuscript in preparation",
    badges: [{ kind: "status", text: "in preparation" }],
  },

  /* ================= Domestic ================= */
  { id: "d2025-boundary", category: "domestic", theme: "gdl", date: "2025-01-01", year: 2025,
    title: "Enhanced Boundary-Aware Semantic Segmentation via Deep Learning and Geometric Analysis",
    authors: "Inyoung Oh, Minsung Kim, Kwang Hee Ko", venue: "Korean CDE Conference 2025",
    badges: [{ kind: "award", text: "\u{1F3C6} Best Poster Award" }] },
  { id: "d2024-glasses", category: "domestic", theme: "image3d", date: "2024-01-01", year: 2024,
    title: "Deep-Learning–Based Camera Pose Estimation and Mixed Reality Using Smart Glasses",
    authors: "Inyoung Oh, Minsung Kim, Gilsang Jang, Junsang Yun, Kwang Hee Ko", venue: "Korean CDE Conference 2024",
    badges: [{ kind: "award", text: "\u{1F3C6} Best Poster Award" }] },
  { id: "d2023-joint", category: "domestic", theme: "image3d", date: "2023-01-04", year: 2023,
    title: "A Deep-Learning Framework for User Joint Estimation and Camera Pose Estimation",
    authors: "Junsang Yun, Gilsang Jang, Inyoung Oh, Jinho Song, Daewoon Kim, Kwang Hee Ko", venue: "Korean CDE Conference 2023", badges: [] },
  { id: "d2023-projmap", category: "domestic", theme: "image3d", date: "2023-01-03", year: 2023,
    title: "Dynamic Projection-Mapping Framework via Object Pose Estimation",
    authors: "Gilsang Jang, Jinho Song, Inyoung Oh, Moongu Son, Daewoon Kim, Junsang Yun, Kwang Hee Ko", venue: "Korean CDE Conference 2023", badges: [] },
  { id: "d2023-occlusion", category: "domestic", theme: "image3d", date: "2023-01-02", year: 2023,
    title: "Robust Object Recognition and Pose Estimation Under Occlusion Using Deep Learning",
    authors: "Inyoung Oh, Gilsang Jang, Junsang Yun, Moongu Son, Jinho Song, Daewoon Kim, Kwang Hee Ko", venue: "Korean CDE Conference 2023",
    badges: [{ kind: "award", text: "\u{1F3C6} Best Poster Award" }] },
  { id: "d2023-marker", category: "domestic", theme: "geometry", date: "2023-01-01", year: 2023,
    title: "Extracting Objects of Interest from Point Clouds via Marker-Based Registration",
    authors: "Jinho Song, Inyoung Oh, Gilsang Jang, Moongu Son, Kwang Hee Ko", venue: "Korean CDE Conference 2023", badges: [] },
  { id: "d2023-depthmap", category: "domestic", theme: "image3d", date: "2023-01-05", year: 2023,
    title: "Depth-Map–Driven Object Recognition and User Pose Estimation for Mixed Reality Using Deep Learning",
    authors: "Inyoung Oh, Jinho Song, Gilsang Jang, Moongu Son, Daewoon Kim, Minseong Kim, Kwang Hee Ko", venue: "Korean CDE Conference 2023", badges: [] },
  { id: "d2022-regcorr", category: "domestic", theme: "geometry", date: "2022-01-04", year: 2022,
    title: "Robust Marker-Based Real-Time Registration Correction",
    authors: "Jinho Song, Inyoung Oh, Gilsang Jang, Kwang Hee Ko", venue: "KITS Fall Conference 2022", badges: [] },
  { id: "d2022-annot", category: "domestic", theme: "image3d", date: "2022-01-03", year: 2022,
    title: "An RGB-D–Based Automatic Annotation Tool for Object Recognition",
    authors: "Inyoung Oh, Jinho Song, Gilsang Jang, Moongu Son, Daewoon Kim, Kwang Hee Ko", venue: "KITS Fall Conference 2022", badges: [] },
  { id: "d2022-synth1", category: "domestic", theme: "image3d", date: "2022-01-02", year: 2022,
    title: "Generating Synthetic Training Datasets to Improve 6-DoF Pose Estimation Across Lighting Conditions",
    authors: "Gilsang Jang, Moongu Son, Junsang Yun, Inyoung Oh, Jinho Song, Kwang Hee Ko", venue: "KITS Fall Conference 2022",
    badges: [{ kind: "award", text: "\u{1F3C6} Best Paper Award" }] },
  { id: "d2022-synth2", category: "domestic", theme: "image3d", date: "2022-01-01", year: 2022,
    title: "A Synthetic-Dataset Generation Framework for Training 6-DoF Pose Estimation Networks",
    authors: "Gilsang Jang, Moongu Son, Inyoung Oh, Daewoon Kim, Jinho Song, Kwang Hee Ko", venue: "Korean CDE Conference 2022",
    badges: [{ kind: "award", text: "\u{1F3C6} Best Poster Award" }] },
  { id: "d2021-slam", category: "domestic", theme: "gdl", date: "2021-01-02", year: 2021,
    title: "Improved Semantic SLAM Using LiDAR Normal Vectors",
    authors: "Minsung Kim, Inyoung Oh, Daewoon Kim, Jihoon Park, Kwang Hee Ko", venue: "Korean CDE Conference 2021", badges: [] },
  { id: "d2021-lidar", category: "domestic", theme: "gdl", date: "2021-01-01", year: 2021,
    title: "Object-Detection-Based 3D LiDAR Intensity Calibration and Real-Time Detection of Clustered Object Candidates Using Deep Learning",
    authors: "Inyoung Oh, Minsung Kim, Moongu Son, Gilsang Jang, Junsang Yun, Jinho Song, Daewoon Kim, Kwang Hee Ko", venue: "Korean CDE Conference 2021",
    badges: [{ kind: "award", text: "\u{1F3C6} Best Poster Award" }] },
  { id: "d2020-plane", category: "domestic", theme: "geometry", date: "2020-01-02", year: 2020,
    title: "Semi-Real-Time Plane Detection Using Depth Images",
    authors: "Inyoung Oh, Daewoon Kim, Jinho Song, Jihoon Park, Moongu Son, Junsang Yun, Gilsang Jang, Kwang Hee Ko", venue: "Korean CDE Conference 2020", badges: [] },
  { id: "d2020-k", category: "domestic", theme: "gdl", date: "2020-01-01", year: 2020,
    title: "Analysis of Plane Normal-Vector Estimation and Deep-Learning–Based Selection of Parameter k",
    authors: "Inyoung Oh, Junhee Lee, Daewoon Kim, Jihoon Park, Kwang Hee Ko", venue: "Korean CDE Conference 2020",
    badges: [{ kind: "award", text: "\u{1F3C6} Best Poster Award" }] },
  { id: "d2019-ar", category: "domestic", theme: "image3d", date: "2019-01-01", year: 2019,
    title: "Augmented-Reality Technologies Leveraging Indoor Localization",
    authors: "Jihoon Park, Inyoung Oh, Junhee Lee, Sangmin Park, Kwang Hee Ko", venue: "Korean CDE Conference 2019", badges: [] },
  { id: "d2018-hough", category: "domestic", theme: "geometry", date: "2018-01-01", year: 2018,
    title: "Detection of Spheres and Cylinders in Point Clouds Using RANSAC and the 2D Hough Transform",
    authors: "Inyoung Oh, Minsung Kim, Kwang Hee Ko", venue: "Korean CDE Conference 2018", badges: [] },
  { id: "d2017-projmap", category: "domestic", theme: "image3d", date: "2017-01-01", year: 2017,
    title: "Projection Mapping on Freeform Surfaces",
    authors: "Sunghyun Moon, Jineon Park, Inyoung Oh, Garam Song, Kwang Hee Ko", venue: "Korean CDE Conference 2017", badges: [] },

  /* ================= Patents ================= */
  {
    id: "patent2020",
    category: "patent",
    theme: "geometry",
    date: "2020-07-08",
    year: 2020,
    title: "Automated System for Detecting 3D Pipeline",
    authors: "Kwang Hee Ko, Inyoung Oh",
    venue: "KR Patent 10-2135828 (registered July 2020) · technology transfer",
    badges: [],
  },
];
