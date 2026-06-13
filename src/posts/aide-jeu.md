---
title: Aide de jeu
layout: layouts/aide-jeu.vto
description: Référence rapide pour les actions et réactions en combat
---

<div class="aide-jeu-grid">

  <!-- ═══════════════ ACTIONS ═══════════════ -->
  <section>
    <h2 class="aj-section-title">Actions</h2>
    <p class="aj-section-subtitle">Pendant votre tour</p>

    <!-- Attaque -->
    <div class="aj-item">
      <svg class="aj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Sword icon -->
        <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/>
        <line x1="13" y1="19" x2="19" y2="13"/>
        <line x1="16" y1="16" x2="20" y2="20"/>
        <line x1="19" y1="21" x2="21" y2="19"/>
      </svg>
      <div class="aj-item-body">
        <span class="aj-item-name">Attaque</span>
        <p class="aj-item-desc">Lancez votre dé de dégâts, raté sur un 1. Chaque attaque après la première ajoute un désavantage.</p>
      </div>
    </div>

    <!-- Lancer un sort -->
    <div class="aj-item">
      <svg class="aj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Flame icon -->
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
      <div class="aj-item-body">
        <span class="aj-item-name">Lancer un sort</span>
        <p class="aj-item-desc">Certains sorts coûtent plusieurs actions. Les sorts de niveau supérieur coûtent aussi des points de mana.</p>
      </div>
    </div>

    <!-- Déplacement -->
    <div class="aj-item">
      <svg class="aj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Footprints / move: using PersonStanding-like legs -->
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
      <div class="aj-item-body">
        <span class="aj-item-name">Déplacement</span>
        <p class="aj-item-desc">Jusqu'à votre vitesse. Peut être fractionné entre d'autres actions.</p>
      </div>
    </div>

    <!-- Évaluer -->
    <div class="aj-item">
      <svg class="aj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Eye / Scan icon -->
        <circle cx="12" cy="12" r="3"/>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/>
      </svg>
      <div class="aj-item-body">
        <span class="aj-item-name">Évaluer <small style="font-weight:normal">DD 10</small></span>
        <p class="aj-item-desc">
          <ul>
            <li>Poser une question</li>
            <li>Créer une ouverture <em>(augmente le dé primaire de la prochaine attaque de 1)</em></li>
            <li>Anticiper le danger <em>(réduit le dé primaire de la prochaine attaque de 1)</em></li>
          </ul>
        </p>
      </div>
    </div>

  </section>

  <!-- ═══════════════ CENTRE : DÉS ═══════════════ -->
  <div class="aj-center">
    <p class="aj-center-label">3 Actions/Tour</p>

    <div class="aj-die">
      <!-- Die face 1 -->
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    </div>
    <div class="aj-die-connector"></div>
    <div class="aj-die">
      <!-- Die face 2 -->
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
        <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/>
      </svg>
    </div>
    <div class="aj-die-connector"></div>
    <div class="aj-die">
      <!-- Die face 3 -->
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
      </svg>
    </div>
  </div>

  <!-- ═══════════════ RÉACTIONS ═══════════════ -->
  <section>
    <h2 class="aj-section-title">Réactions</h2>
    <p class="aj-section-subtitle">Hors de votre tour, 1/round chacune</p>

    <!-- Défense -->
    <div class="aj-item aj-item--right">
      <svg class="aj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Shield icon -->
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
      <div class="aj-item-body">
        <span class="aj-item-name">Défense</span>
        <p class="aj-item-desc">Réduisez les dégâts d'une seule attaque par votre valeur de Défense.</p>
      </div>
    </div>

    <!-- Interposition -->
    <div class="aj-item aj-item--right">
      <svg class="aj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Heart + shield combined: use ShieldHalf or Heart -->
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
      <div class="aj-item-body">
        <span class="aj-item-name">Interposition</span>
        <p class="aj-item-desc">Poussez une créature à 2 cases hors du chemin et devenez la nouvelle cible.</p>
      </div>
    </div>

    <!-- Attaque d'opportunité -->
    <div class="aj-item aj-item--right">
      <svg class="aj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- Zap / lightning for opportunity -->
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
      <div class="aj-item-body">
        <span class="aj-item-name">Attaque d'opportunité</span>
        <p class="aj-item-desc">Effectuée avec désavantage contre un ennemi qui quitte volontairement votre portée.</p>
      </div>
    </div>

    <!-- Aide -->
    <div class="aj-item aj-item--right">
      <svg class="aj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <!-- HandHeart / Help icon -->
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
      </svg>
      <div class="aj-item-body">
        <span class="aj-item-name">Aide</span>
        <p class="aj-item-desc">Permettez à un allié de relancer si vous pouvez expliquer comment.</p>
      </div>
    </div>

    <div class="aj-note">
      <strong>Autres actions :</strong> Empoigner, Se cacher, Tests de compétence<br>
      <strong>Actions gratuites (1/tour) :</strong> <em>Tâches simples (ouvrir une porte non verrouillée, crier une phrase, lâcher un objet, etc.).</em>
    </div>

  </section>

</div>
