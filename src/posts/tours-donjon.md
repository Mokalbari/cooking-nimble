---
title: Tours de donjon
layout: layouts/aide-jeu.vto
description: Ce que les héros peuvent faire pendant un tour d'exploration
---

<div class="td-page td-page--two-col">

  <section class="td-hero-turns">
    <h2 class="td-title">Tours des Héros</h2>
    <p class="td-intro">Un tour dure <strong>5 à 10 minutes</strong>. Chaque héros choisit <strong>1 action</strong> — tout se résout en même temps, dans l'ordre le plus logique.</p>

    <ul class="td-actions">

      <li class="td-action">
        <div class="td-action-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <!-- Moon / rest -->
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
          </svg>
        </div>
        <div class="td-action-body">
          <span class="td-action-name">Se reposer.</span>
          Reprendre son souffle et dépenser des Dés de Vie pour récupérer des PV.
        </div>
      </li>

      <li class="td-action">
        <div class="td-action-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <!-- Search -->
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <div class="td-action-body">
          <span class="td-action-name">Explorer la zone.</span>
          Tenter de découvrir secrets et indices dans un endroit précis (examiner quelque chose de plus près, chercher ce qui n'a pas été mentionné). Le MJ exprime honnêtement s'il n'y a rien à trouver.
        </div>
      </li>

      <li class="td-action">
        <div class="td-action-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <!-- Eye / watch -->
            <circle cx="12" cy="12" r="3"/>
            <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/>
          </svg>
        </div>
        <div class="td-action-body">
          <span class="td-action-name">Monter la garde.</span>
          Observer et écouter attentivement. Si un combat démarre ce tour, le groupe ne peut pas être surpris et le gardien gagne <strong>+10</strong> à son jet d'initiative.
        </div>
      </li>

      <li class="td-action">
        <div class="td-action-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <!-- Wrench / misc -->
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <div class="td-action-body">
          <span class="td-action-name">Action diverse.</span>
          Tenter de surmonter un obstacle — forcer ou crocheter une porte, désamorcer un piège, dégager des décombres, bloquer un passage, lire un journal, examiner une gravure.
        </div>
      </li>

      <li class="td-action">
        <div class="td-action-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <!-- MessageCircle / interact -->
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div class="td-action-body">
          <span class="td-action-name">Interagir.</span>
          Parler à un PNJ, négocier, fouiller un cadavre, récupérer du butin, ou toute autre chose qui ne rentre dans aucune case ci-dessus.
        </div>
      </li>

      <li class="td-action">
        <div class="td-action-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <!-- MapPin / move -->
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <div class="td-action-body">
          <span class="td-action-name">Se déplacer.</span>
          Traverser prudemment une petite zone inexplorée, ou rapidement une grande zone inexplorée.
        </div>
      </li>

    </ul>

  </section>

  <section class="td-dungeon-turn">
    <h2 class="td-title td-title--dungeon">Tour du Donjon</h2>
    <p class="td-intro">Une fois les actions résolues, <strong>le donjon agit</strong>. Le MJ lance le pool de dés et consulte les résultats.</p>
    <ul class="td-dungeon-results">
      <li><strong>Un 1</strong> — une complication survient.</li>
      <li><strong>Un double chiffre</strong> — un événement spécial.</li>
      <li><strong>Double ou triple 1</strong> — une rencontre corsée.</li>
      <li><strong>Aucun résultat</strong> — le MJ ajoute 1d6 au pool.</li>
    </ul>
    <p class="td-dungeon-note">Le pool démarre à 1d6, ajusté selon la dangerosité de la zone. La pression monte à chaque tour sans incident.</p>
  </section>

</div>
