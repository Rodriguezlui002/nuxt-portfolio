<template>
  <div>
    <div class="flex justify-center h-screen/60 mb-6">
      <TheHero />
    </div>
    <div class="mb-6">
      <TheIntro />
    </div>
    <div class="flex flex-col md:flex-row gap-6 mb-10">
      <TheCourses class="flex-1" />
      <TheSkills class="flex-1" />
    </div>
    <div id="projects" class="mb-6 mx-3">
      <h2 class="text-2xl uppercase font-bold tracking-wider text-center mb-5">Projects</h2>
      <div class="mb-6">
        <ProjectCard />
      </div>
    </div>
    <div class="flex justify-center">
      <TheTech />
    </div>
    <div>
      <TheAbout />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>
