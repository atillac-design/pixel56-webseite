// node render_w1.js <post> [preview]  -> covers as MP4, others PNG; preview: all slides as PNG at end state
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');const {execSync}=require('child_process');
const NAMES={so:'3-branchen-3-projekte'};
(async()=>{
  const [pk,mode]=process.argv.slice(2);const fps=30;
  const outDir=path.resolve(__dirname,'out',NAMES[pk]);fs.mkdirSync(outDir,{recursive:true});
  const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
  pg.on('pageerror',e=>console.error(pk,'ERR',e.message));
  const open=async s=>{await pg.goto('file://'+path.resolve(__dirname,'vorlage.html')+`?p=${pk}&s=${s}`);await pg.evaluate(()=>document.fonts.ready);await pg.waitForTimeout(150)};
  await open(1);const N=await pg.evaluate(()=>window.NSLIDES);
  for(let s=1;s<=N;s++){
    await open(s);const D=await pg.evaluate(()=>window.DURATION);const cover=await pg.evaluate(()=>window.ISCOVER);const isLast=s===N;
    const base=`${NAMES[pk]}_${String(s).padStart(2,'0')}`;
    if(mode==='preview'||(!cover&&!isLast)){await pg.evaluate(t=>render(t),D-0.01);await pg.screenshot({path:`${outDir}/${base}.png`,scale:'css'});continue}
    // video: cover and CTA
    const dir=path.resolve(__dirname,`fr_wk_${pk}${s}`);fs.rmSync(dir,{recursive:true,force:true});fs.mkdirSync(dir);
    const Nf=Math.round(D*fps);
    for(let i=0;i<Nf;i++){await pg.evaluate(t=>render(t),i/fps);await pg.screenshot({path:`${dir}/${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:100})}
    const out=`${outDir}/${base}.mp4`;
    execSync(`ffmpeg -y -v error -framerate ${fps} -i ${dir}/%04d.jpg -vf format=gbrp,scale=1080:1350:flags=lanczos:out_color_matrix=bt709:out_range=tv,format=yuv420p -color_range tv -c:v libx264 -preset slow -crf 6 -profile:v high -pix_fmt yuv420p -colorspace bt709 -color_primaries bt709 -color_trc bt709 -movflags +faststart ${out}.tmp.mp4 && mv ${out}.tmp.mp4 ${out}`);
    fs.rmSync(dir,{recursive:true,force:true});
  }
  await b.close();
})();
