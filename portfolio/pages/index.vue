<template>
  <div>
    <div class="flex justify-center h-screen/60 mb-6">
      <TheHero />
    </div>
    <div class="mb-6">
      <TheIntro />
    </div>
    <div class="flex flex-col md:flex-row space-y-6 mb-6 md:space-y-0">
      <TheCourses class="flex-1" />
      <TheSkills class="flex-1" />
    </div>
    <div class="flex flex-wrap justify-center mb-6">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
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
