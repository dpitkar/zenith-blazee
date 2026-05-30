<template>
  <!-- Animated NAV chart line -->
  <div class="hero-chart-bg" aria-hidden="true">
    <svg
      class="hero-chart-svg"
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient :id="`chartAreaGrad-${uid}`" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#c9a84c" stop-opacity="0.09"/>
          <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <!-- Area fill -->
      <path
        class="chart-area"
        :style="{ fill: `url(#chartAreaGrad-${uid})` }"
        d="M-10,520 L80,498 L140,515 L200,474 L255,452 L310,468 L368,432
           L425,404 L475,422 L528,382 L582,356 L634,374 L685,340 L742,310
           L794,330 L845,294 L900,270 L952,286 L1005,254 L1062,230 L1114,246
           L1166,210 L1222,184 L1280,200 L1338,170 L1450,148
           L1450,600 L-10,600 Z"
      />

      <!-- Glow -->
      <path
        class="chart-line-glow"
        d="M-10,520 L80,498 L140,515 L200,474 L255,452 L310,468 L368,432
           L425,404 L475,422 L528,382 L582,356 L634,374 L685,340 L742,310
           L794,330 L845,294 L900,270 L952,286 L1005,254 L1062,230 L1114,246
           L1166,210 L1222,184 L1280,200 L1338,170 L1450,148"
      />

      <!-- Main line -->
      <path
        class="chart-line"
        d="M-10,520 L80,498 L140,515 L200,474 L255,452 L310,468 L368,432
           L425,404 L475,422 L528,382 L582,356 L634,374 L685,340 L742,310
           L794,330 L845,294 L900,270 L952,286 L1005,254 L1062,230 L1114,246
           L1166,210 L1222,184 L1280,200 L1338,170 L1450,148"
      />

      <!-- Data-point dots -->
      <circle class="chart-dot chart-dot--1" cx="200"  cy="474" r="3.5"/>
      <circle class="chart-dot chart-dot--2" cx="425"  cy="404" r="3.5"/>
      <circle class="chart-dot chart-dot--3" cx="582"  cy="356" r="3.5"/>
      <circle class="chart-dot chart-dot--4" cx="742"  cy="310" r="3.5"/>
      <circle class="chart-dot chart-dot--5" cx="900"  cy="270" r="3.5"/>
      <circle class="chart-dot chart-dot--6" cx="1062" cy="230" r="3.5"/>
      <circle class="chart-dot chart-dot--7" cx="1222" cy="184" r="3.5"/>

      <!-- Live endpoint -->
      <circle class="chart-dot chart-dot--live"  cx="1338" cy="170" r="5"/>
      <circle class="chart-dot-pulse"             cx="1338" cy="170" r="5"/>
    </svg>
  </div>

  <!-- Floating finance symbols -->
  <div class="hero-finance-particles" aria-hidden="true">
    <span
      v-for="sym in symbols"
      :key="sym.id"
      class="finance-symbol"
      :class="`finance-symbol--${sym.type}`"
      :style="sym.style"
    >
      <template v-if="sym.type === 'rupee'">₹</template>
      <template v-else-if="sym.type === 'percent'">%</template>
      <template v-else-if="sym.type === 'arrow'">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7 7 17 7 17 17"/>
        </svg>
      </template>
      <template v-else-if="sym.type === 'bars'">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="2"  y="14" width="5" height="8"  rx="1"/>
          <rect x="9"  y="9"  width="5" height="13" rx="1"/>
          <rect x="16" y="4"  width="5" height="18" rx="1"/>
        </svg>
      </template>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

// Unique ID per instance so SVG gradient IDs don't collide across pages
const uid = getCurrentInstance()?.uid ?? 'hero'

const symbolPool = [
  'rupee', 'rupee', 'percent', 'percent',
  'arrow', 'arrow', 'bars',   'rupee',
  'percent', 'arrow', 'bars', 'rupee'
]

// Initialised empty — populated on client only to avoid SSR hydration mismatch
const symbols = ref([])

onMounted(() => {
  symbols.value = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    type: symbolPool[i % symbolPool.length],
    style: {
      left:              `${4 + Math.round(Math.random() * 90)}%`,
      fontSize:          `${11 + Math.round(Math.random() * 11)}px`,
      animationDuration: `${20 + Math.round(Math.random() * 18)}s`,
      animationDelay:    `-${Math.round(Math.random() * 28)}s`,
      opacity:           +(0.18 + Math.random() * 0.22).toFixed(2)
    }
  }))
})
</script>

<style scoped>
/* ── Chart background ── */
.hero-chart-bg {
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}

.hero-chart-svg {
  bottom: 0;
  height: 75%;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
}

.chart-area {
  opacity: 0.7;
}

.chart-line {
  fill: none;
  stroke: rgba(201, 168, 76, 0.55);
  stroke-dasharray: 4000;
  stroke-dashoffset: 4000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
  animation: drawChart 2.8s ease 1s forwards;
}

.chart-line-glow {
  fill: none;
  filter: blur(5px);
  stroke: rgba(201, 168, 76, 0.18);
  stroke-dasharray: 4000;
  stroke-dashoffset: 4000;
  stroke-linecap: round;
  stroke-width: 10;
  animation: drawChart 2.8s ease 1s forwards;
}

.chart-dot {
  fill: rgba(201, 168, 76, 0.5);
  opacity: 0;
}

.chart-dot--1 { animation: fadeIn 0.25s ease 1.60s forwards; }
.chart-dot--2 { animation: fadeIn 0.25s ease 1.90s forwards; }
.chart-dot--3 { animation: fadeIn 0.25s ease 2.15s forwards; }
.chart-dot--4 { animation: fadeIn 0.25s ease 2.40s forwards; }
.chart-dot--5 { animation: fadeIn 0.25s ease 2.65s forwards; }
.chart-dot--6 { animation: fadeIn 0.25s ease 2.90s forwards; }
.chart-dot--7 { animation: fadeIn 0.25s ease 3.10s forwards; }

.chart-dot--live {
  fill: #c9a84c;
  animation: fadeIn 0.3s ease 3.4s forwards;
}

.chart-dot-pulse {
  fill: none;
  stroke: #c9a84c;
  stroke-width: 1.5;
  opacity: 0;
  animation: dotPulse 2s ease 3.7s infinite;
}

/* ── Floating symbols ── */
.hero-finance-particles {
  contain: strict;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}

.finance-symbol {
  animation: floatParticle linear infinite;
  bottom: -30px;
  color: rgba(201, 168, 76, 0.6);
  font-family: var(--font-body);
  font-weight: 600;
  line-height: 1;
  opacity: 0;
  position: absolute;
  will-change: transform, opacity;
}

.finance-symbol svg {
  display: block;
  height: 1em;
  width: 1em;
}

/* ── Keyframes ── */
@keyframes drawChart {
  to { stroke-dashoffset: 0; }
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes floatParticle {
  0%   { opacity: 0; transform: translateY(0)       translateX(0); }
  8%   { opacity: 1; }
  50%  { opacity: 0.85; transform: translateY(-48vh) translateX(16px); }
  92%  { opacity: 0.6; }
  100% { opacity: 0; transform: translateY(-105vh)  translateX(-10px); }
}

@keyframes dotPulse {
  0%   { opacity: 0.8; r: 5;  }
  60%  { opacity: 0;   r: 14; }
  100% { opacity: 0;   r: 14; }
}

@media (prefers-reduced-motion: reduce) {
  .chart-line,
  .chart-line-glow,
  .chart-dot,
  .chart-dot-pulse,
  .finance-symbol {
    animation: none;
    opacity: 0;
  }
}
</style>
