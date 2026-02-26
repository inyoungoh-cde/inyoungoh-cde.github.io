---
layout: single
title: About
permalink: /about/
author_profile: true
---

Hi, I’m Inyoung Oh, a Postdoctoral Fellow in the [Visual Intelligence Group](https://vig.kist.re.kr/){:target="_blank" rel="noopener"}, [Center for Artificial Intelligence](https://cai.kist.re.kr/){:target="_blank" rel="noopener"}, AI & Robotics Institute at the [Korea Institute of Science and Technology (KIST)](https://kist.re.kr/eng/index.do){:target="_blank" rel="noopener"}. I received my Ph.D. in [Mechanical and Robotics Engineering](https://me.gist.ac.kr/meeng/index.do){:target="_blank" rel="noopener"} from [Gwangju Institute of Science and Technology (GIST)](https://www.gist.ac.kr/en/main.html){:target="_blank" rel="noopener"}, advised by Prof. Kwanghee Ko in the [MODSIM](https://me.gist.ac.kr/modsim/){:target="_blank" rel="noopener"} Lab.

My research focuses on geometric deep learning for robust 3D perception and spatial intelligence. I develop geometry-aware learning frameworks that explicitly incorporate geometric structure—such as surface normals, curvatures, discontinuities, and spatial relationships—into neural networks, enabling reliable representation learning under sparse, noisy, and real-world sensing conditions.

My work spans sharp feature detection, surface normal estimation, normal-guided LiDAR semantic segmentation, and monocular 6DoF pose estimation, with applications in robotics, autonomous systems, and mixed reality. These systems are designed to remain stable under real-world variability and to support deployable perception in practical environments.

At KIST, I am expanding this research toward RGB-driven 3D perception and monocular spatial understanding, focusing on estimating metric attributes such as 3D position and human height from monocular RGB input, enabling physically grounded spatial understanding. My goal is to advance spatial AI systems that achieve robust, physically grounded scene understanding across sensing modalities and real-world conditions.

Ultimately, I aim to develop representation learning frameworks where geometric structure serves as a fundamental inductive bias, enabling scalable and deployable perception for intelligent systems operating in complex physical environments.

## Education

<div class="edu-grid">

  <div class="edu-card">
    <div class="edu-title">
      <i class="fas fa-graduation-cap"></i>
      <strong>Ph.D. Candidate</strong> <span class="edu-time">(2018–Present)</span>
    </div>
    <div class="edu-school"><strong>Gwangju Institute of Science and Technology (GIST), Gwangju, Republic of Korea</strong></div>
    <ul class="edu-list">
      <li>Major: Mechanical and Robotics Engineering</li>
      <li>Advisor: Prof. Kwanghee Ko</li>
      <li>GPA: 4.2 / 4.5</li>
      <li><em>Expected Graduation: February 2026</em></li>
      <li>Thesis: “Normal Vector Estimation, and Semantic Segmentation of 3D Point Clouds using Deep Learning and Geometric Analysis”</li>
    </ul>
  </div>

  <div class="edu-card">
    <div class="edu-title">
      <i class="fas fa-graduation-cap"></i>
      <strong>M.S.</strong> <span class="edu-time">(2016–2018)</span>
    </div>
    <div class="edu-school"><strong>Gwangju Institute of Science and Technology (GIST), Gwangju, Republic of Korea</strong></div>
    <ul class="edu-list">
      <li>Major: Mechatronics</li>
      <li>Advisor: Prof. Kwanghee Ko</li>
      <li>GPA: 3.91 / 4.5</li>
      <li>Thesis: “Sphere and Cylinder Detection in Kinect Point Clouds using the RANSAC and the 2D Hough Transform”</li>
    </ul>
  </div>

  <div class="edu-card">
    <div class="edu-title">
      <i class="fas fa-graduation-cap"></i>
      <strong>B.S.</strong> <span class="edu-time">(2009–2016)</span>
    </div>
    <div class="edu-school"><strong>Chungnam National University, Daejeon, Republic of Korea</strong></div>
    <ul class="edu-list">
      <li>Major: Mechatronics Engineering</li>
      <li>Advisor: Prof. Myounggyu Noh</li>
      <li>GPA: 3.913 / 4.5</li>
      <li>Thesis: “Research on Semi-Automatic Drills” (Grand Prize, Capstone Design Fair)</li>
    </ul>
  </div>

</div>

<style>
/* Education cards – responsive two-column grid */
.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 18px;
  margin-top: .8rem;
}
.edu-card {
  background: #fff;
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: 0 1px 0 rgba(0,0,0,.06), 0 2px 10px rgba(0,0,0,.04);
  border: 1px solid rgba(0,0,0,.06);
}
.edu-title {
  font-size: 1.05rem;
  font-weight: 600;
  display: flex; align-items: center; gap: 8px;
  margin-bottom: .4rem;
}
.edu-time { color: #666; font-weight: 500; }
.edu-school { margin-bottom: .4rem; }
.edu-list { margin: .4rem 0 0 .1rem; }
.edu-list li { margin: .25rem 0; }
@media (max-width: 600px) {
  .edu-card { padding: 16px; }
}
</style>

## Teaching Experience

<div class="teach-card">
  <ul class="teach-list">
    <li>
      <div class="teach-head">
        <i class="fas fa-calendar-check"></i>
        <strong>2020 — Teaching Assistant, Engineering Analysis</strong>
      </div>
      <div class="teach-body">
        Led weekly recitations and office hours, developed exam content, and conducted biweekly Python sessions to boost students’ problem-solving skills.
      </div>
    </li>

    <li>
      <div class="teach-head">
        <i class="fas fa-calendar-check"></i>
        <strong>2017 — Teaching Assistant, Engineering Analysis</strong>
      </div>
      <div class="teach-body">
        Facilitated weekly recitations and office hours, crafted exam questions, and led biweekly MATLAB/C++ sessions to strengthen computational skills.
      </div>
    </li>

    <li>
      <div class="teach-head">
        <i class="fas fa-user-friends"></i>
        <strong>2018–Present — Mentorship Experience, Modeling and Simulation Lab</strong>
      </div>
      <div class="teach-body">
        Provided one-on-one guidance over a year, overseeing data collection, lab organization, and problem-solving development that contributed to a bachelor’s thesis.
      </div>
    </li>
  </ul>
</div>

<style>
/* --- Teaching Experience cards --- */
.teach-card{
  background:#fff;border:1px solid rgba(0,0,0,.06);
  border-radius:14px;padding:18px 20px;margin-top:.6rem;
  box-shadow:0 1px 0 rgba(0,0,0,.06),0 2px 10px rgba(0,0,0,.04);
}
.teach-list{margin:0;padding-left:1.1rem;}
.teach-list>li{margin:.65rem 0;}
.teach-head{font-size:1.02rem;font-weight:600;display:flex;gap:.5rem;align-items:center;}
.teach-head i{color:#5b7cff;}
.teach-body{margin:.25rem 0 0 .1rem;line-height:1.55;}
@media (max-width:600px){
  .teach-card{padding:16px;}
}
</style>

## Awards

<div class="awards-card">

  <!-- Awards -->
  <div class="awards-group">
    <div class="awards-title"><i class="fas fa-trophy"></i><strong>Awards</strong></div>
    <ul class="awards-list">
      <li><strong>Best Poster Award</strong>, Korean CDE Society (2025)</li>
      <li>
        <strong>Best Poster Award</strong>, Korean CDE Society (2024) — 
        <a href="https://webzine.cde.or.kr/webzine/sub.html?md_no=91" target="_blank" rel="noopener">webzine</a>
      </li>
      <li><strong>Best Poster Award</strong>, Korean CDE Society (2023)</li>
      <li><strong>CDE DX Encouragement Award</strong>, Korean CDE Society (2022)</li>
      <li><strong>Best Poster Award</strong>, Korean CDE Society (2021)</li>
      <li><strong>Best Poster Award</strong>, Korean CDE Society (2020)</li>
    </ul>
  </div>

  <!-- Scholarships -->
  <div class="awards-group">
    <div class="awards-title"><i class="fas fa-medal"></i><strong>Scholarship</strong></div>
    <ul class="awards-list">
      <li>
        <strong>Outstanding PhD Student RA Scholarship</strong>, GIST 
        <span class="muted">— 2018, 2019, 2020, 2021, 2023, 2025</span>
      </li>
      <li>
        <strong>GIST Scholarship (Government support – Doctoral studies)</strong>
        <span class="muted">— 2018–Present</span>
      </li>
      <li>
        <strong>GIST Scholarship (Government support – Master’s studies)</strong>
        <span class="muted">— 2016–2018</span>
      </li>
    </ul>
  </div>

</div>


<style>
/* --- Awards card style (Minimal Mistakes friendly) --- */
.awards-card{
  background:#fff;border:1px solid rgba(0,0,0,.06);
  border-radius:14px;padding:18px 20px;margin-top:.6rem;
  box-shadow:0 1px 0 rgba(0,0,0,.06),0 2px 10px rgba(0,0,0,.04);
}
.awards-group + .awards-group{ margin-top:.8rem; }
.awards-title{display:flex;gap:.5rem;align-items:center;margin-bottom:.25rem;}
.awards-title i{color:#f4b400;}  /* trophy/medal color */
.awards-list{margin:.25rem 0 0 .1rem;}
.awards-list li{margin:.45rem 0;line-height:1.55;}
.muted{color:#666;}
@media (max-width:600px){ .awards-card{padding:16px;} }
</style>


