export type PipelineStatus = 'In development' | 'Planned' | 'Released';

export interface Pipeline {
  slug: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  tags: string[];
  status: PipelineStatus;
  engine: 'Nextflow' | 'Snakemake';
}

export const pipelines: Pipeline[] = [
  {
    slug: 'wgs',
    title: 'Whole-genome sequencing',
    category: 'Genomics',
    description: 'Read quality control, trimming, alignment and variant calling for whole-genome sequencing data.',
    tools: ['FastQC', 'fastp', 'BWA-MEM2', 'SAMtools'],
    tags: ['wgs', 'alignment', 'variants'],
    status: 'In development',
    engine: 'Nextflow'
  },
  {
    slug: 'rnaseq',
    title: 'Bulk RNA-seq',
    category: 'Transcriptomics',
    description: 'Quality control, quantification and differential expression analysis for bulk RNA sequencing.',
    tools: ['FastQC', 'fastp', 'STAR', 'DESeq2'],
    tags: ['rna-seq', 'gene-expression', 'deseq2'],
    status: 'In development',
    engine: 'Nextflow'
  },
  {
    slug: 'scrnaseq',
    title: 'Single-cell RNA-seq',
    category: 'Single-cell',
    description: 'QC, normalisation, dimensionality reduction, clustering and cell-type annotation of single-cell data.',
    tools: ['Scanpy', 'Seurat', 'scvi-tools'],
    tags: ['scrna-seq', 'clustering', 'annotation'],
    status: 'Planned',
    engine: 'Nextflow'
  },
  {
    slug: 'amr',
    title: 'Antimicrobial resistance genomics',
    category: 'Microbial genomics',
    description: 'Assembly and annotation of bacterial genomes with detection of resistance genes, virulence factors and mobile elements.',
    tools: ['AMRFinderPlus', 'ABRicate', 'Prokka', 'BLAST'],
    tags: ['amr', 'bacteria', 'annotation'],
    status: 'In development',
    engine: 'Nextflow'
  },
  {
    slug: 'variantcall',
    title: 'Germline variant analysis',
    category: 'Genetics',
    description: 'Alignment, variant calling, filtering and functional annotation of germline variants.',
    tools: ['BWA', 'GATK', 'BCFtools', 'VEP'],
    tags: ['vcf', 'gatk', 'annotation'],
    status: 'Planned',
    engine: 'Nextflow'
  },
  {
    slug: 'metagenomics',
    title: 'Shotgun metagenomics',
    category: 'Metagenomics',
    description: 'Read QC, taxonomic profiling and microbial community analysis for shotgun metagenomic samples.',
    tools: ['Kraken2', 'Bracken', 'MetaPhlAn', 'MultiQC'],
    tags: ['microbiome', 'taxonomy', 'profiling'],
    status: 'Planned',
    engine: 'Snakemake'
  }
];

export const categories = [...new Set(pipelines.map((p) => p.category))];
