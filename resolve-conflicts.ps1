# Script to resolve merge conflicts by keeping both changes
# This removes conflict markers while preserving all content from both branches

$conflictedFiles = git diff --name-only --diff-filter=U

foreach ($file in $conflictedFiles) {
    if (Test-Path $file) {
        Write-Host "Resolving conflicts in: $file"

        # Read the file content
        $content = Get-Content $file -Raw

        # Remove conflict markers while keeping all content
        # Remove <<<<<<< HEAD
        $content = $content -replace '<<<<<<< HEAD\r?\n', ''

        # Remove ======= separator
        $content = $content -replace '\r?\n?=======\r?\n', ''

        # Remove >>>>>>> origin/jugaadx-one (or any branch name)
        $content = $content -replace '\r?\n?>>>>>>> .*\r?\n', ''

        # Write the resolved content back to the file
        Set-Content -Path $file -Value $content -NoNewline

        Write-Host "Resolved: $file"
    }
}

Write-Host ""
Write-Host "All conflicts resolved! Both changes have been kept."
Write-Host "Use git add to stage all resolved files."
