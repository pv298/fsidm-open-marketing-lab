const groups = {
  "Search intent & content": [
    "The page matches one clear search intent.",
    "The content answers the visitor's main questions.",
    "The page provides original, useful information.",
    "The title and H1 clearly describe the page.",
    "Headings follow a logical hierarchy."
  ],
  "Metadata & indexing": [
    "The title tag is unique and descriptive.",
    "The meta description is unique and relevant.",
    "The URL is readable and stable.",
    "The canonical URL is correct.",
    "Indexing directives are intentional."
  ],
  "Links & media": [
    "Important pages have relevant internal links.",
    "Anchor text describes the destination.",
    "Images are appropriately sized and compressed.",
    "Informative images have meaningful alt text.",
    "Broken links and redirect chains are checked."
  ],
  "Technical & experience": [
    "Important URLs return the expected HTTP status.",
    "Robots.txt and XML sitemap are reviewed.",
    "Mobile usability is checked.",
    "Core Web Vitals are reviewed where data is available.",
    "The primary call to action works as expected."
  ],
  "Trust & conversion": [
    "Business/contact information is accurate.",
    "Claims and statistics are supported by evidence.",
    "The next step is clear to the visitor.",
    "The page matches the linked ad or campaign promise."
  ]
};
const container = document.querySelector("#checklist");
let checks = [];
Object.entries(groups).forEach(([heading, items]) => {
  const section = document.createElement("section");
  section.className = "category";
  const h = document.createElement("h2"); h.textContent = heading; section.append(h);
  items.forEach(text => {
    const label = document.createElement("label"); label.className = "item";
    const input = document.createElement("input"); input.type = "checkbox";
    const span = document.createElement("span"); span.textContent = text;
    input.addEventListener("change", () => { label.classList.toggle("checked", input.checked); update(); });
    label.append(input, span); section.append(label); checks.push(input);
  });
  container.append(section);
});
document.querySelector("#total").textContent = checks.length;
function update(){
  const done = checks.filter(c=>c.checked).length, pct = Math.round(done/checks.length*100);
  document.querySelector("#done").textContent = done;
  document.querySelector("#percent").textContent = pct+"%";
  document.querySelector("#bar").style.width = pct+"%";
}
document.querySelector("#export").addEventListener("click",()=>{
  const val=id=>document.querySelector(id).value.trim()||"Not provided";
  const lines = [
    "FSIDM OPEN MARKETING LAB — MANUAL SEO REVIEW",
    "Project: "+val("#siteName"),"Website: "+val("#siteUrl"),
    "Reviewer: "+val("#reviewer"),"Date: "+new Date().toLocaleDateString(),
    "",...Object.entries(groups).flatMap(([group,items])=>[
      group,...items.map((item,i)=>(checks[Object.values(groups).slice(0,Object.keys(groups).indexOf(group)).flat().length+i].checked?"[x] ":"[ ] ")+item),""
    ]),
    "KEY FINDINGS / NEXT STEPS:",val("#notes"),"",
    "Note: This is a manual checklist, not an automated crawler or ranking score."
  ];
  const blob = new Blob([lines.join("\n")],{type:"text/plain;charset=utf-8"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);
  a.download="seo-review-"+(val("#siteName").replace(/[^a-z0-9]+/gi,"-").toLowerCase()||"project")+".txt";
  a.click();URL.revokeObjectURL(a.href);
});
document.querySelector("#reset").addEventListener("click",()=>{
  if(confirm("Clear all checklist selections and notes?")){
    checks.forEach(c=>{c.checked=false;c.closest("label").classList.remove("checked")});
    document.querySelector("#notes").value=""; update();
  }
});
update();
