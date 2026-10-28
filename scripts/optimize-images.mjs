import { mkdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const sourceDirectory = 'assets/source-images';
const outputDirectory = 'public/optimized';
const images = [
  { source: 'team-picture.png', output: 'team-picture.webp', width: 1400 },
  { source: 'Sample.png', output: 'treatment.webp', width: 1400 },
  { source: 'portrait-doctora.png', output: 'portrait-doctora.webp', width: 420 },
  { source: 'portrait-doctor.png', output: 'portrait-doctor.webp', width: 420 },
];

await mkdir(outputDirectory, { recursive: true });

for (const image of images) {
  const source = join(sourceDirectory, image.source);
  const output = join(outputDirectory, image.output);
  await sharp(source)
    .rotate()
    .resize({ width: image.width, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(output);
  const originalBytes = (await stat(source)).size;
  const optimizedBytes = (await stat(output)).size;
  console.log(`${image.source}: ${(originalBytes / 1024).toFixed(0)} KB → ${(optimizedBytes / 1024).toFixed(0)} KB`);
}
